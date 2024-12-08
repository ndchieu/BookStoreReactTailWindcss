import { React, useContext, useState, useEffect } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { LuSettings2 } from 'react-icons/lu'
import { categories } from '../assets/data'
import Title from '../components/Title'
import Item from '../components/Item'
import Footer from '../components/Footer'
import { ShopContext } from '../context/ShopContext'
const Shop = () => {

    const { books } = useContext(ShopContext)
    const [category, setCategory] = useState([])
    const [sortType, setSortType] = useState('relevant')
    const [filteredBooks, setFilteredBooks] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1) //Active page

    const itemPerPage = 10 //Number of books per page

    const toggleFilter = (value, setState) => {
        setState((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value])
    }

    const applyFilter = () => {
        let filtered = [...books]

        if (search) {
            filtered = filtered.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length) {
            filtered = filtered.filter((book) => category.includes(book.category))
        }
        return filtered
    }

    const applySorting = (booksList) => {
        if (!booksList) return []; // Trả về mảng rỗng nếu danh sách không hợp lệ
        switch (sortType) {
            case 'low':
                return booksList.sort((a, b) => a.price - b.price);
            case 'high':
                return booksList.sort((a, b) => b.price - a.price);
            default:
                return booksList; // Mặc định là "relevant"
        }
    };


    useEffect(() => {
        let filtered = applyFilter()
        let sorted = applySorting(filtered)
        setFilteredBooks(sorted)
        setCurrentPage(1) //Reset tot the first page when filters change
    }, [category, sortType, books, search])

    //Get books for the current page
    const getPaginatedBooks = () => {
        const startIndex = (currentPage - 1) * itemPerPage
        const endIndex = startIndex + itemPerPage
        return filteredBooks.slice(startIndex, endIndex)
    }

    // Total number of pages
    const totalPages = Math.ceil((filteredBooks?.length || 0) / itemPerPage);

    return (
        <section className='bg-white max-padd-container'>
            <div className='pt-28'>
                {/* Search box */}
                <div className='w-full max-w-2xl flexCenter'>
                    <div className='inline-flex items-center justify-center w-full p-4 px-5 overflow-hidden rounded-full bg-primary'>
                        <div className='text-lg cursor-pointer'>
                            <RiSearch2Line />
                        </div>
                        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search here...' className='w-full pl-4 text-sm border-none outline-none bg-primary' />
                        <div className='pl-2 text-lg border-l cursor-pointer flexCenter'>
                            <LuSettings2 />
                        </div>
                    </div>
                </div>
                {/* Categories filter */}
                <div className='mt-12 mb-16'>
                    <h4 className='hidden mb-4 h4 sm:flex'>Categories:</h4>
                    <div className='flex-wrap flexCenter sm:flexStart gap-x-12 gap-y-4'>
                        {categories.map((cat) => (
                            <label key={cat.name}>
                                <input value={cat.name} onChange={(e) => toggleFilter(e.target.value, setCategory)} type="checkbox" className='hidden peer' />
                                <div className='flex-col gap-2 cursor-pointer flexCenter peer-checked:text-secondaryOne'>
                                    <div className='w-20 h-20 rounded-full flexCenter bg-primary'>
                                        <img src={cat.image} alt={cat.name} className='object-cover w-10 h-10' />
                                    </div>
                                    <span className='medium-14'>{cat.name}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Books Container */}
                <div className='mt-8'>
                    {/* title and sort */}
                    <div className='flexBetween !items-start gap-7 flex-wrap pb-16 max-sm:flexCenter text-center'>
                        <Title title1={'Our'} title2={'Book List'} titleStyles={'pb-0 text-start'} paraStyles={'!block'} />
                        <div className='flexCenter gap-x-2'>
                            <span className='hidden sm:flex medium-16'>Sort by:</span>
                            <select onChange={(e) => setSortType(e.target.value)} className='text-sm p-2.5 outline-none text-gray-30 rounded bg-primary'>
                                <option value="relevant">Relevant</option>
                                <option value="low">Low</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                    {/* Book items */}
                    <div className='grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                        {getPaginatedBooks().length > 0 ? (getPaginatedBooks().map((book) => (
                            <Item book={book} key={book._id} />
                        ))
                        ) : (
                            <p>No Books found for selected filters</p>
                        )}
                    </div>
                </div>
                {/* Pagination */}
                <div className='gap-4 mb-10 flexCenter mt-14'>
                    {/* Previous Button */}
                    <button disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className={`btn-secondary !py-1 !px-3 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}>Previous
                    </button>
                    {/* Page number */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`btn-light !py-1 !px-3 ${currentPage === index + 1 && '!bg-secondaryOne'}`}>
                            {index + 1}
                        </button>
                    ))}
                    {/* Next Button */}
                    <button disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className={`btn-secondary !py-1 !px-3 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}>Next
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Shop
