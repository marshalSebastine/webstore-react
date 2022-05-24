import { useState} from "react";
import FormInput from '../FormInput/FormInput'
import Button,{BUTTON_TYPE_CLASSES} from "../customButton/Button.component";
import { ButtonGroup,AuthsChildred } from "../../routes/authorization/authorisation.component.styles";
// import { UserContext } from "../../contexts/usercontexts";
import { signInWithGooglePopUp,signInUserWithEmailandPassword} from "../../utils/firebase/firestore.utils";

const SignInForm = () => {

const defaultFormState = {
    email: '',
    password: '',
}
// const {setCurrentUser} = useContext(UserContext);
const [formstate,setformstate] = useState(defaultFormState);
const {email,password} = formstate;
const handleOnchange = async (event) => {
   
    const {name,value} = event.target;
    setformstate({...formstate,[name]: value});
}
const gpopup = async () => {
     await signInWithGooglePopUp();
}

const handleSubmitAction = async (event) => {
        event.preventDefault();
    try{ 
        console.log("submit action implemented",email,password);          
        const response = await signInUserWithEmailandPassword(email,password);
        console.log("user data:",response);
    }catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    };
    
    return(
        <AuthsChildred>
            <form onSubmit={handleSubmitAction}>
                <h2>Do Not Have An account?</h2>
                <span>Sign up with your email and password</span>

                <FormInput label = 'Email' type='email' name='email' value={email} onChange={handleOnchange} required/>

                <FormInput label='Password' type='password' name="password" value={password} onChange={handleOnchange} required/>
                <ButtonGroup>
                       <Button children = 'Sign In' type="submit" buttonstyle={BUTTON_TYPE_CLASSES.inverted}></Button>
                       <Button children = 'Google Sign In' type="button" buttonstyle={BUTTON_TYPE_CLASSES.google} onClick={gpopup}></Button>
                </ButtonGroup>
            </form>
        </AuthsChildred>
    )
}
export default SignInForm; 
