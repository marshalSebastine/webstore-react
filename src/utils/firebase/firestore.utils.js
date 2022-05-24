import {initializeApp} from 'firebase/app';
import {onAuthStateChanged,signInWithPopup,signInWithRedirect,getAuth,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import {getFirestore,doc,getDoc,getDocs,setDoc, collection,
    writeBatch,query} from 'firebase/firestore'
//  web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsEDSy1MKkZkvAPqi5X30yoObEVT1XNV8",
    authDomain: "crwn-store-db-8fb05.firebaseapp.com",
    projectId: "crwn-store-db-8fb05",
    storageBucket: "crwn-store-db-8fb05.appspot.com",
    messagingSenderId: "10268616476",
    appId: "1:10268616476:web:112c7c4ac5445931423cd9"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const googleprovider = new GoogleAuthProvider();
  googleprovider.setCustomParameters(
      {prompt: 'select_account'}
  );

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth,googleprovider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleprovider);
  export const signInUserWithEmailandPassword =  async (email,password) => {
      if(!email || !password){
          return;
      }
      return( await signInWithEmailAndPassword(auth,email,password));     
  }
  export const storeUserAuthData = async (userauthdata,additionaldata = {}) => {
     
    console.log("additional data",additionaldata);
    if(!userauthdata){
        return
    };
      const userdocref = doc(db,'users',userauthdata.uid)
      let usersnapshot = await getDoc(userdocref);
      
      //create user data if not exists
      if(!usersnapshot.exists()){
        
        try{
           
            const {displayName,email} = userauthdata;
            
            let datatime = new Date();
            setDoc(userdocref,{
                displayName,
                email,
                datatime,
                ...additionaldata
            })
            return (userdocref)
        }catch(error){
            console.log("error creatong user data", error.message);
        }


      }else{
          console.log('user data already exists');
          return (userdocref)
      }

  } 

export const createUserWithEmailandPassword = async (email,password) => {
    if (!email || !password){
        return
    }

    return await createUserWithEmailAndPassword(auth,email,password);
} 
export const signOutUser = async () => {
    return await signOut(auth);
}
export const onAuthChangedListener = (callback) => 
    onAuthStateChanged(auth,callback);
    
export const db = getFirestore();

export const addCategoriesAndDocuments = async (collectionKey,objectsToAdd) => {

    const batch = writeBatch(db);
    const collectionRef = collection(db,collectionKey);

    objectsToAdd.forEach((object) => {
        const docref = doc(collectionRef,object.title.toLowerCase());
        batch.set(docref,object);
    })

    await batch.commit();
    alert('done');

}

export const getAllProductsInCategories = async (products) => {
    const collectionRef = collection(db, 'products');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
};