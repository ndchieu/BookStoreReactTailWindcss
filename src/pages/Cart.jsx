import { React, useContext } from 'react'
import { TbTrash } from 'react-icons/tb'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'


const Cart = () => {

    const { books, navigate, currency, cartItems, getCartAmount, updateQuantity } = useContext(ShopContext)

    return (
        <section className='max-padd-container'>
            <div className='pt-28'>
                {/* Title */}
                <Title title1={'Cart'} title2={'List'} title1Styles={'h3'} />
                {/* Cart Item */}
                <div className='mt-6'>
                    {books.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id} className='p-2 mt-3 bg-white rounded-lg'>
                                    <div className='flex gap-x-3'>
                                        <div className='flex items-start gap-6'>
                                            <img src={item.image} alt="itemImg" className='rounded w-14' />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <h5 className='h5 !my-0 line-clamp-1'>{item.name}</h5>
                                            <div className='flex items-start justify-between'>
                                                <div>
                                                    <p className='mb-1.5'>{item.category}</p>
                                                    <div className='flex items-center overflow-hidden rounded-full ring-1 ring-slate-900/5 bg-primary'>
                                                        <button onClick={() => updateQuantity(item._id, cartItems[item._id] - 1)} className='p-1.5 text-xs bg-white rounded-full shadow-md'>
                                                            <FaMinus />
                                                        </button>
                                                        <p className='px-1.5'>{cartItems[item._id]}</p>
                                                        <button onClick={() => updateQuantity(item._id, cartItems[item._id] + 1)} className='p-1.5 text-xs bg-white rounded-full shadow-md'><FaPlus /></button>
                                                    </div>
                                                </div>
                                                <h4 className='h4'>{currency}{item.price}.00 </h4>
                                                <TbTrash onClick={() => updateQuantity(item._id, 0)} className='text-xl cursor-pointer text-secondary' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    })}
                </div>

                {/* Cart Summary */}
                <div className='flex mt-20'>
                    <div className='w-full sm:w-[450px]'>
                        <CartTotal />
                        <button onClick={() => navigate('/place-order')} className='btn-secondaryOne mt-7'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Cart
