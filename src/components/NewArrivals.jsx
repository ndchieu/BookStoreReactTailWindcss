import { React, useState, useEffect, useContext } from 'react'
import Title from './Title'
import Item from './Item'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules'
import { ShopContext } from '../context/ShopContext'

const NewArrivals = () => {

    const { books } = useContext(ShopContext)
    const [newArrivals, setNewArrivals] = useState([])

    //Extract the first new books as new arrivals
    useEffect(() => {
        const data = books.slice(0, 10)
        setNewArrivals(data.reverse())
    }, [books])

    return (
        <section className='py-16 bg-white max-padd-container'>
            <Title title1={'New'} title2={'Arrivals'} titleStyles={'pb-10'} paraStyles={'!block'} />
            <p>From timeless classics to modern masterpieces, find the <br />
                perfect read for every moment</p>
            {/* Swiper container */}
            <Swiper
                autoplay={{
                    deleay: 3500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                }}
                // Add Swiper modules
                modules={[Pagination, Autoplay]}
                className='h-[455px] sm:h-[488px] xl:h-[550px] mt-5 lg:h-[500px]'>
                {newArrivals.map((book) => (
                    <SwiperSlide key={book._id}>
                        <Item book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default NewArrivals
