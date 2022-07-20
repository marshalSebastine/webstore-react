import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from "../customButton/Button.component";
import { signUpStart } from '../../store/user/user-action-types';

function SignUpForm() {

  const defaultFormState = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: '',
  };
  const dispatch = useDispatch();
  const [formstate, setformstate] = useState(defaultFormState);
  const {
    displayName, email, password, confirmpassword,
  } = formstate;
  // const {setCurrentUser} = useContext(UserContext);

  const clearInputFields = () => {
    setformstate({ defaultFormState });
  };

  const handleOnchange = (event) => {

    const { name, value } = event.target;
    setformstate({ ...formstate, [name]: value });
  };


  const handleSubmitAction = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      alert("the passwords does not match");
    }
    try {
      dispatch(signUpStart());
    } catch (error) {
      if (error.code === 'auth/error-already-in-use') {
        alert('User with given email id already exists');
      }
      clearInputFields();
      console.log('error from authneticatewithemail and password firebase', error);
    }

  };
  return (
    <div className="auths-children">
      <form onSubmit={handleSubmitAction}>
        <h2>Do Not Have An account?</h2>
        <span>Sign up with your email and password</span>
        <FormInput label="DisplayName" type="text" name="displayName" value={displayName} onChange={handleOnchange} required />

        <FormInput label="Email" type="email" name="email" value={email} onChange={handleOnchange} required />

        <FormInput label="Password" type="password" name="password" value={password} onChange={handleOnchange} required />

        <FormInput label="Confirm Password" type="password" name="confirmpassword" value={confirmpassword} onChange={handleOnchange} required />

        <Button children="Submit" type="submit" buttonstyle={BUTTON_TYPE_CLASSES.google} onClick={handleSubmitAction} />

      </form>
    </div>
  );
}
export default SignUpForm;
