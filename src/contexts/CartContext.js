
import { createContext,useState, useEffect } from "react";


const addtocart = (cartproducts,selectedproduct) => {
    const existingproduct = cartproducts.find(
        (cartitem) => cartitem.id === selectedproduct.id
    );

    if (existingproduct){
        return cartproducts.map(
            (product) => {
             return    product.id === selectedproduct.id ? {...product, quantity: product.quantity +1} :
                {...product};
            }
        )
    }

    return ([...cartproducts,{...selectedproduct,quantity: 1}]);
}

const minusFronCart = (cartproducts,selectedproduct) => 
    {
        if(selectedproduct.quantity === 1)
            return cartproducts.filter((product) => product.id !== selectedproduct.id)

        return (cartproducts.map((product) => {
           return  product.id === selectedproduct.id ? {...product, quantity: product.quantity - 1} : {...product} }));
        
    }

const removeFromCart = (cartproducts,selectedproduct) => 
{
        return cartproducts.filter((product) => product.id !== selectedproduct.id)
}

export const CartContext = createContext(
    {
        cartdroppeddown: false,
        setcartdrop: () => {},
        cartproducts: [],
        addItemToCart: () => {},
        reduceItemFromCart: () => {},
        removeItemFromCart: () => {},
        cartcount: 0,
        setcartcount: () => {},
        totalprice: 0,
        settotalprice: () => {}
    }
);

export const CartContextProvider = ({children}) => {
    
    const [cartdroppeddown,setcartdrop] = useState(false);
    const [cartproducts,setcartproducts] = useState([]);
    const [cartcount,setcartcount] =  useState(0);
    const [totalprice,settotalprice] = useState(0);
    
    useEffect(() => {
        setcartcount(cartproducts.reduce((total,product) => {
            total = total + product.quantity
            return total
        },0));
    },[cartproducts]);

    useEffect(() => {
        settotalprice(cartproducts.reduce((total,product) => {
            total = total + (product.quantity * product.price)
            return total
        },0));
    },[cartproducts]);

    const addItemToCart = (product) => 
    setcartproducts(addtocart(cartproducts,product));

    const reduceItemFromCart = (product) => 
    setcartproducts(minusFronCart(cartproducts,product));


    const removeItemFromCart = (product) => 
    setcartproducts(removeFromCart(cartproducts,product));


    const value = {cartdroppeddown,setcartdrop,cartproducts,addItemToCart,reduceItemFromCart,removeItemFromCart,cartcount,totalprice};
    console.log('understanding variables in destructering:',value);
    return(<CartContext.Provider value={value} >{children}</CartContext.Provider>);

};