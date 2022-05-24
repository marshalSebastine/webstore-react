import {BaseButton,GoogleButton,InvertedButton} from './button.styles.js';


export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    default: 'default'
}
const getButton = (buttontype = BUTTON_TYPE_CLASSES.default) => {

    return(
        {
            [BUTTON_TYPE_CLASSES.google]:  GoogleButton,
            [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
            [BUTTON_TYPE_CLASSES.default]: BaseButton,
        }[buttontype]
    );

}
const Button = ({children,buttonstyle,...otherProps}) => {
    const CustomButtom = getButton(buttonstyle);
    return(<CustomButtom {...otherProps}>{children}</CustomButtom>);
}

export default Button;