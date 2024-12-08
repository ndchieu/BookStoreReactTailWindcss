import { React, useContext } from 'react'
import { TbShoppingBagPlus } from 'react-icons/tb';
import { ShopContext } from '../context/ShopContext'


const Item = ({ book }) => {

    const { currency, addToCart } = useContext(ShopContext)

    return (
        <div className='min-h-[400px]'>
            <div className='relative p-6 overflow-hidden flexCenter bg-primary rounded-3xl group'>
                <img src={book.image} alt="bookImg" className='rounded-lg shadow-xl shadow-slate-900/30 ' />
            </div>

            <div className='p-3 min-h-[200px]'>
                <div className='flexBetween'>
                    <h4 className='h4 line-clamp-1 !my-0'>{book.name}</h4>
                    <span onClick={() => addToCart(book._id)} className='w-8 h-8 rounded cursor-pointer flexCenter hover:bg-primary'> <TbShoppingBagPlus className='text-lg' /></span>
                </div>
                <div className='pt-1 flexBetween'>
                    <p className='font-bold capitalize'>{book.category}</p>
                    <h5 className='pr-2 h5 text-secondaryOne'>{currency}{book.price}.00</h5>
                </div>
                <p className='py-1 line-clamp-2 min-h-[100px]'>{book.description}</p>
            </div>

        </div>

    )
}

export default Item
