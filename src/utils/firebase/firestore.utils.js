/* eslint-disable no-return-await */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { initializeApp } from 'firebase/app';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getAuth, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import {
  getFirestore, doc, getDoc, getDocs, setDoc, collection,
  writeBatch, query,
} from 'firebase/firestore';
//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCsEDSy1MKkZkvAPqi5X30yoObEVT1XNV8',
  authDomain: 'crwn-store-db-8fb05.firebaseapp.com',
  projectId: 'crwn-store-db-8fb05',
  storageBucket: 'crwn-store-db-8fb05.appspot.com',
  messagingSenderId: '10268616476',
  appId: '1:10268616476:web:112c7c4ac5445931423cd9',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore();

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters(
  { prompt: 'select_account' },
);

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);
export const signInUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  // eslint-disable-next-line consistent-return,no-return-await
  return await signInWithEmailAndPassword(auth, email, password);
};
export const storeUserAuthData = async (userauthdata, additionaldata = {}) => {
  if (!userauthdata) return;

  const userdocref = doc(db, 'users', userauthdata.uid);
  const usersnapshot = await getDoc(userdocref);

  // create user data if not exists
  if (!usersnapshot.exists()) {

    const { displayName, email } = userauthdata;
    const datatime = new Date();
    try {
      await setDoc(userdocref, {
        displayName,
        email,
        datatime,
        ...additionaldata,
      });

    } catch (error) {
      console.log('error creatong user data', error.message);
    }
  }
  return (usersnapshot);
};

export const createUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
export const onAuthChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => (new Promise((resolve, reject) => {
  const unsuscribe = onAuthStateChanged(
    auth,
    (userAuth) => {
      unsuscribe();
      resolve(userAuth);
    },
    reject,
  );
}));

export const addCategoriesAndDocuments = async (collectionKey, objectsToAdd) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docref = doc(collectionRef, object.title.toLowerCase());
    batch.set(docref, object);
  });

  await batch.commit();
};

export const getAllProductsInCategories = async (products) => {
  const collectionRef = collection(db, products);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  // eslint-disable-next-line no-shadow
  return querySnapshot.docs.map((doc) => doc.data());
};
