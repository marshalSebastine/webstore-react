import { createContext,useState } from "react";

export const CartContext = createContext(
    {
        cartdroppeddown: false,
        setcartdrop: () => {},
    }
);

export const CartContextProvider = ({children}) => {
    const [cartdroppeddown,setcartdrop] = useState(false);
    const value = {cartdroppeddown,setcartdrop};
    console.log('understanding variables in destructering:',value);
    return(<CartContext.Provider value={value} >{children}</CartContext.Provider>);
};