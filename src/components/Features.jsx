import React from 'react'
import filter from '../assets/features/filter.png'
import rating from '../assets/features/rating.png'
import wishlist from '../assets/features/wishlist.png'
import secure from '../assets/features/secure.png'
const Features = () => {
    return (
        <section className='py-16 max-padd-container'>
            <div className='grid grid-cols-2 gap-5 max-padd-container md:grid-cols-3 lg:grid-cols-4 gap-y-12'>
                <div className='flex-col gap-3 flexCenter'>
                    <img src={filter} alt="FeatureIcon" height={44} width={44} />
                    <div className='flex-col flexCenter'>
                        <h5 className='h5'>Advanced Search and Filters</h5>
                        <hr className='w-8 h-1 border-none rounded-full bg-secondary' />
                    </div>
                    <p className='text-center'>Effortlessly search books by title, author, genre, or price range. </p>
                </div>
                <div className='flex-col gap-3 flexCenter'>
                    <img src={rating} alt="FeatureIcon" height={44} width={44} />
                    <div className='flex-col flexCenter'>
                        <h5 className='h5'>User Reviews and Ratings</h5>
                        <hr className='w-8 h-1 border-none rounded-full bg-secondary' />
                    </div>
                    <p className='text-center'>Customers can share reviews, rate books, and guide future readers. </p>
                </div>
                <div className='flex-col gap-3 flexCenter'>
                    <img src={wishlist} alt="FeatureIcon" height={44} width={44} />
                    <div className='flex-col flexCenter'>
                        <h5 className='h5'>Wishlist and Favorites</h5>
                        <hr className='w-8 h-1 border-none rounded-full bg-secondary' />
                    </div>
                    <p className='text-center'>Save books to wishlist for future purchases or easy access. </p>
                </div>
                <div className='flex-col gap-3 flexCenter'>
                    <img src={secure} alt="FeatureIcon" height={44} width={44} />
                    <div className='flex-col flexCenter'>
                        <h5 className='h5'>Secure Online Payments</h5>
                        <hr className='w-8 h-1 border-none rounded-full bg-secondary' />
                    </div>
                    <p className='text-center'>Enjoy seamless checkout with multiple secure payment options. </p>
                </div>
            </div>

        </section>
    )
}

export default Features
