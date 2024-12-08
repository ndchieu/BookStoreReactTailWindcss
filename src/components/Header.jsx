import { React, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo_small.png';
import Navbar from './Navbar';
import { CgMenuLeft } from 'react-icons/cg';
import { TbUserCircle } from 'react-icons/tb';
import { RiUserLine, RiShoppingBag4Line } from 'react-icons/ri';
import { ShopContext } from '../context/ShopContext'

const Header = () => {
    const { getCartCount } = useContext(ShopContext)
    const navigate = useNavigate('dummytoken');
    const [token, setToken] = useState(null);
    const [menuOpened, setMenuOpened] = useState(false);
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setMenuOpened((prev) => !prev);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (menuOpened) {
                setMenuOpened(false);
            }
            setActive(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuOpened]);

    const handleLoginClick = () => {
        if (!token) {
            navigate('/login');
        }
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 w-full'>
            <div className={`${active ? 'bg-white py-2.5' : 'bg-primary px-6 py-3'} max-padd-contaier flexBetween border-b border-slate-900/10 rounded transition-all duration-300`}>
                {/* Logo */}
                <Link to={'/'} className='flex items-center justify-start flex-1'>
                    <img src={logoImg} alt="" height={60} width={80} className='hidden mr-2 rounded-full sm:flex' />
                    <h4 className=' bold-24'>BookShop</h4>
                </Link>
                {/* Navbar */}
                <div className='flex-1'>
                    <Navbar
                        menuOpened={menuOpened}
                        toggleMenu={toggleMenu}
                        containerStyles={`${menuOpened
                            ? 'flex flex-col gap-y-16 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl'
                            : 'hidden xl:flex justify-center gap-x-8 xl:gap-14 medium-15 px-2 py-1 ease-in'
                            }`}
                    />
                </div>
                {/* Right side */}
                <div className='flex items-center justify-end flex-1 gap-x-3 sm:gap-x-10'>
                    <CgMenuLeft onClick={toggleMenu} className='text-2xl cursor-pointer xl:hidden' />
                    <Link to={'/cart'} className='relative flex'>
                        <RiShoppingBag4Line className='text-[33px] bg-secondary text-primary p-1.5 rounded-full' />
                        <span className='absolute bg-primary ring-1 ring-slate-900/5 medium-14 -top-2.5 left-5 rounded-full w-5 h-5 flexCenter shadow-md'>{getCartCount()}</span>
                    </Link>
                    <div className='relative group'>
                        {/* User login/logout */}
                        <div onClick={handleLoginClick} className=''>
                            {token ?
                                (<div>
                                    <TbUserCircle className='text-[29px] cursor-pointer' />
                                </div>)
                                :
                                (<button onClick={() => navigate('/login')} className='btn-outline flexCenter gap-x-2'>
                                    Login <RiUserLine />
                                </button>
                                )}
                        </div>
                        {/* Dropdown menu */}
                        {token && (
                            <ul className='absolute right-0 flex-col hidden w-32 p-1 bg-white rounded shadow-md group-hover:flex ring-1 ring-slate-900/5 top-6 regular-14'>
                                <li className='p-2 rounded-md cursor-pointer hover:bg-primary text-tertiary'>Orders</li>
                                <li className='p-2 rounded-md cursor-pointer hover:bg-primary text-tertiary'
                                    onClick={() => {
                                        setToken(null);
                                        localStorage.removeItem('token');
                                        navigate('/');
                                    }}
                                >
                                    Logout
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
