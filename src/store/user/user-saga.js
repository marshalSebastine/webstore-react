import {
  takeLatest, put, all, call,
} from 'redux-saga/effects';
import {
  USER_ACTION_TYPES,
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signUpSuccess,
  signUpFailed,
} from './user-action-types';

import {
  getCurrentUser,
  storeUserAuthData,
  signInWithGooglePopUp,
  signInUserWithEmailandPassword,
  createUserWithEmailandPassword,
  signOutUser,
} from '../../utils/firebase/firestore.utils';

export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
  try {
    const usersnapshot = yield call(storeUserAuthData, userAuth, additionalDetails);
    yield put(signInSuccess({ id: usersnapshot.id, ...usersnapshot.data() }));
  } catch (er) {
    yield put(signInFailed(er));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopUp);
    yield call(getSnapShotFromUserAuth, user);
  } catch (er) {
    yield put(signInFailed(er));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* isUserAuthenticated() {
  try {
    const userauth = yield call(getCurrentUser);
    if (!userauth) return;
    yield call(storeUserAuthData, userauth);
  } catch (er) {
    yield put(signInFailed(er));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInUserWithEmailandPassword, email, password);
    yield call(getSnapShotFromUserAuth, user);
  } catch (er) {
    yield put(signInFailed(er));
  }

}

export function* signUp({ payload: email, password, displayName }) {
  try {
    const { user } = yield call(createUserWithEmailandPassword, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (er) {
    signUpFailed(er);
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (er) {
    yield put(signOutFailed(er));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapShotFromUserAuth, user, additionalDetails);
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}
export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
