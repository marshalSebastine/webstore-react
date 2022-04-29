import './button.styles.scss';


const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    default: 'default'
}

const Button = ({children,buttonstyle,...otherProps}) => {
    return(<button className={`${BUTTON_TYPE_CLASSES[buttonstyle]} button-container`} {...otherProps}>{children}</button>);
}

export default Button;