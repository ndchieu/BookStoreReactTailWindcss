import { React, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { books } from '../assets/data.jsx'

export const ShopContext = createContext()


const ShopContextProvider = (props) => {

    const currency = '$'
    const delivery_charges = 0
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    const [cartItems, setCartItems] = useState({});


    //Adding items to cart
    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const newCartData = { ...prevCartItems };
            if (newCartData[itemId]) {
                newCartData[itemId] += 1;
            } else {
                newCartData[itemId] = 1;
            }
            return newCartData;
        });
    };

    useEffect(() => {
        if (cartItems && typeof cartItems === 'object') {
            // console.log(cartItems);
        } else {
            console.error('cartItems is not an object');
        }
    }, [cartItems]);


    //Getting total cart items
    const getCartCount = () => {
        let totalCount = 0;
        for (const count of Object.values(cartItems)) {
            try {
                if (count > 0) {
                    totalCount += count;
                }
            } catch (error) {
                console.error(error);
            }
        }
        return totalCount;
    };

    //Getting total cart amount 
    const getCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = books.find((book) => book._id === item)
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price
                }
            }
        }
        return totalAmount.toFixed(1)
    }

    //Updating the Quantity 
    const updateQuantity = async (itemId, quantity) => {
        const cartData = { ...cartItems }
        cartData[itemId] = quantity
        setCartItems(cartData)
    }

    const contextValue = { books, currency, navigate, token, setToken, setCartItems, cartItems, addToCart, getCartCount, getCartAmount, updateQuantity, delivery_charges }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
