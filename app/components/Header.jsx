'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import LOGO from '../../public/p-store.png'
import LOGOWHITE from '../../public/p-store-white.png'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NAV_LINKS } from '../utils/data';





const Header = () => {

    const currentPath = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            setIsScrolled(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {

        backgroundColor: isScrolled ? 'white' : 'black',
        color: isScrolled ? '#000' : 'white',
        transition: 'background-color 0.5s ease',

    };

    const dropdownIcon = {
        color: isScrolled ? '#000' : '#fff'

    }

    const dropdownContent = {
        backgroundColor: isScrolled ? 'white' : 'black',
        color: isScrolled ? 'black' : 'white'

    }


    const menuStyle = {
        color: isScrolled ? '#333' : '#fff',

    }


    return (

        <header style={headerStyle} className='pr-0 mb-10 w-full text-white  h-[60px]  !z-40 py-4 fixed top-0 shadow-lg lg:px-12'>
            <div className='flex max-w-[90%] h-full mx-auto justify-between  items-center'>
                {/* LOGO */}
                <div>
                    <Link href='/'>

                        <Image width={100} height={100} src={isScrolled ? LOGO : LOGOWHITE} alt="LOGO" />
                    </Link>
                </div>
                {/* NAVLINKS */}
                <ul className="hidden uppercase font-bold lg:flex items-center gap-9">
                    {
                        NAV_LINKS.map((link) => (

                            <Link key={link.href} href={link.href} className={`${link.href === currentPath ? 'font-bold border-b-2 border-white px-6 pb-2 text-[primary]' : 'text-zinc-400 px-4 pb-2'} hover:text-[primary]`}>
                                {link.label}
                            </Link>


                        ))
                    }
                </ul>






                {/* HAMBURGER MENU */}

                <div className='flex space-x-5'>
                    {/* <LOGIN />SIGNUP></SIGNUP> */}

                    <ul className="nav-links">

                        <li class="dropdown">
                            <div className="flex items-center gap-2"> <span>Get Started</span> <AiOutlineUser className='text-3xl' /></div>
                            <div className="dropdown-list rounded-md" style={dropdownContent}>
                                <ul className='uppercase'>
                                    <li>
                                        <Link href='/login'>Login</Link>
                                    </li>
                                    <li>
                                        <Link href='/register'>Register</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                    </ul>


                    <div className="lg:hidden text-white cursor-pointer p-2 transition-transform duration-100 ease-in-out" onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose className=' scale-125' style={menuStyle} /> : <AiOutlineMenu className='scale-125' style={menuStyle} />}


                    </div>
                </div>

                <div className='flex flex-col bg-[rgba(0,0,0,0.9)] fixed z-10 top-20 right-0  lg:hidden'>

                    <div className={` h-screen w-screen w-min-[800px] z-10  p-3 shadow-lg transition-all duration-700 ${isOpen ? 'block' : 'hidden'}`}>

                        <ul id='mobileNav' className="text-white bg-[--primary] pr-6 font-bold w-[50%] pt-24 list-none h-full uppercase absolute top-0  right-0 " >


                            {
                                NAV_LINKS.map((link) => (

                                    <Link key={link.href} href={link.href} className='block p-4 my-8 text-right'>
                                        {link.label}
                                    </Link>


                                ))
                            }



                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header