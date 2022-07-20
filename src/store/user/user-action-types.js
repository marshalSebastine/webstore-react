/* eslint-disable max-len */

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'user/SET_CURRENT_USER',
  CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
  GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'user/SIGN_IN_FAILED',
  SIGN_UP_START: 'user/SIGN_UP_START',
  SIGN_UP_SUCCESS: 'user/SIGN_UP_SUCCESS',
  SIGN_UP_FAILED: 'user/SIGN_UP_FAILED',
  SIGN_OUT_START: 'user/SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'user/SIGN_OUT_START',
  SIGN_OUT_FAILED: 'user/SIGN_OUT_FAILED',
};


export const setCurrentUser = (user) => ({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });

export const checkUserSession = () => ({ type: USER_ACTION_TYPES.CHECK_USER_SESSION });

export const googleSignInStart = () => ({ type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START });

export const emailSignInStart = (email, password) => ({ type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: { email, password } });

export const signInSuccess = (user) => ({ type: USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload: user });

export const signInFailed = (error) => ({ type: USER_ACTION_TYPES.SIGN_IN_FAILED, payload: error });

export const signUpStart = (email, password, displaynames) => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: {
    email,
    password,
    displaynames,
  },
});

export const signUpSuccess = (user, additionalDetails) => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  payload: {
    user,
    additionalDetails,
  },
});

export const signUpFailed = (err) => ({ type: USER_ACTION_TYPES.SIGN_UP_FAILED, payload: err });

export const signOutStart = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_START });

export const signOutSuccess = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS });

export const signOutFailed = (er) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILED,
  payload: er,
});
