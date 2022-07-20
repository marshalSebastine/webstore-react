import {
  BaseButton, GoogleButton, InvertedButton, LoadingSpinner,
} from './button.styles.js';


export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: 'default',
};
const getButton = (buttontype = BUTTON_TYPE_CLASSES.default) => (
  {
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.default]: BaseButton,
  }[buttontype]
);
function Button({
  children, buttonstyle, isLoading = false, ...otherProps
}) {
  const CustomButtom = getButton(buttonstyle);
  return (<CustomButtom disabled={isLoading} {...otherProps}>{isLoading ? <LoadingSpinner /> : children}</CustomButtom>);
}

export default Button;
