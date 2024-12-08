import { React, useState } from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'
import CartTotal from '../components/CartTotal'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod')

    return (
        <section className='max-padd-container'>
            {/* Container  */}
            <form className='pt-28'>
                <div className='flex flex-col gap-20 xl:flex-row xl:gap-28'>
                    {/* Left side */}
                    <div className='flex flex-1 flex-col gap-3 text-[95%]'>
                        <Title title1={'Delivery'} title2={'Infomation'} titleStyles={'h3'} />
                        <div className='flex gap-3'>
                            <input type="text" name='firstName' placeholder='First Name' className='w-1/2 p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />

                            <input type="text" name='lastName' placeholder='Last Name' className='w-1/2 p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />
                        </div>
                        <input type="text" name='email' placeholder='Email' className='w-full p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />

                        <input type="text" name='phone' placeholder='Phone' className='w-full p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />

                        <input type="text" name='street' placeholder='Street' className='w-full p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />
                        <div>
                            <input type="text" name='city' placeholder='City' className='w-1/2 p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />
                            <input type="text" name='state' placeholder='State' className='w-1/2 p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />

                        </div>
                        <div>
                            <input type="text" name='zipcode' placeholder='Zip Code' className='w-1/2 p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />
                            <input type="text" name='country' placeholder='Country' className='w-1/2 p-1 pl-3 rounded-sm outline-none ring-1 ring-slate-900/15 bg-primary' />

                        </div>
                    </div>
                    {/* Right side */}
                    <div className='flex flex-col flex-1'>
                        <CartTotal />

                        {/* Payment method */}
                        <div className='my-6'>
                            <h3 className='mb-5 bold-20'>Payment <span className='text-secondary'>Method</span></h3>
                            <div className='flex gap-3'>
                                <div onClick={() => setMethod('stripe')} className={`${method === 'stripe' ? 'btn-secondary' : 'btn-white'} !py-1 text-sm cursor-pointer `}>Stripe</div>
                                <div onClick={() => setMethod('cod')} className={`${method === 'cod' ? 'btn-secondary' : 'btn-white'} !py-1 text-sm cursor-pointer `}>Cash on Delivery</div>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='btn-secondaryOne'>Place Order</button>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </section>
    )
}

export default PlaceOrder
