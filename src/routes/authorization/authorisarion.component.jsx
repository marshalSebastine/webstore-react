
import {AuthContainer} from './authorisation.component.styles.js';
import SignInForm from "../../Components/signInForm/SignInForm.component" ;
import SignUpForm from '../../Components/signUpForm/SignUpForm.component';




const Authorization = () => {
  

    return(
        <AuthContainer>
                
                <SignInForm/>
                <SignUpForm></SignUpForm>
    
        </AuthContainer>
    
        )
    // useEffect( () => {
    //     async function responseafterredirect(){
    //     let response = await getRedirectResult(auth)
    //     if(response){
    //         const userdocref = await storeUserAuthData(response.user);
    //         console.log(userdocref)
    //     }
    // }
    // responseafterredirect()},[]);

    // const gredirect = async() => {

    //     await signInWithGoogleRedirect();
    // }

}

export default Authorization;