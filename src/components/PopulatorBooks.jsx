import { React, useState, useEffect, useContext } from 'react'
import Title from './Title'
import Item from './Item'
import { ShopContext } from '../context/ShopContext'
const PopulatorBooks = () => {

    const { books } = useContext(ShopContext)
    const [popularBooks, setPopularBooks] = useState([])

    useEffect(() => {
        const data = books.filter(item => item.popular)
        setPopularBooks(data.slice(0, 5))
    }, [books])

    return (
        <section className='py-16 bg-white max-padd-container'>
            <Title title1={'Popular'} title2={' Books'} titleStyles={'pb-10'} paraStyles={'!block'} />
            <p>From timeless classics to modern masterpieces, find the <br />
                perfect read for every moment</p>
            {/* container */}
            <div className='grid grid-cols-1 gap-10 py-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {popularBooks.map(book => (
                    <div key={book._id}>
                        <Item book={book} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopulatorBooks
