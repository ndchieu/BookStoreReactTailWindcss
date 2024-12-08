import { React, useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
const CartTotal = () => {

    const { currency, getCartAmount, delivery_charges } = useContext(ShopContext)

    return (
        <div>
            {/* Title */}
            <Title title1={'Cart'} title2={'Total'} titleStyles={'h3'} />
            <div className='pt-3 flexBetween'>
                <h5 className='h5'>SubTotal:</h5>
                <p className='h5'>{currency}{getCartAmount()}0</p>
            </div>
            <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
            <div className='pt-3 flexBetween'>
                <h5 className='h5'>Shipping Fee:</h5>
                <p className='h5'>{getCartAmount() === 0 ? '0.00' : `${currency}${delivery_charges}.00`}</p>
            </div>
            <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
            <div className='pt-3 flexBetween'>
                <h5 className='h5'>Total:</h5>
                <p className='h5'>{currency}{getCartAmount() === 0 ? '0.00' : getCartAmount() + delivery_charges}</p>
            </div>
            <hr className='mx-auto h-[1px] w-full bg-gray-900/10 my-1' />
        </div>
    )
}

export default CartTotal
