import Link from 'next/link'
import { ComboboxButtonProps } from '@headlessui/react'
import { AiFillClockCircle, AiFillFacebook, AiFillHome, AiFillHourglass, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillRightCircle, AiFillTwitterCircle, AiOutlineCopyright } from 'react-icons/ai'
import { NAV_LINKS } from '../utils/data'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className='bg-black px-4 py-8 h-auto text-white'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-10 justify-evenly text-left md:grid-cols-2  lg:grid-cols-3 lg:gap-0">
                    <div>
                        <h3 className='font-bold lead lead pb-2 mb-5 inline px-5 border-b-2 border-white'>FIND US</h3>
                        <ul className='mt-7 space-y-5'>
                            <li className='flex gap-2 items-center'>
                                <AiFillHome />
                                <p>No.5 Ambode street, Ikeja, Lagos </p>
                            </li>

                            <li className='flex gap-2 items-center'>
                                <AiFillMail />
                                <a href='mailto:pstores@hotmail.com' target='_blank'>info@pstores.com </a>
                            </li>

                            <li className='flex gap-2 items-center'>
                                <AiFillClockCircle />
                                <p>Mondays-Fridays (9AM-5PM)</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold lead lead pb-2  inline px-5 border-b-2 border-white'>FOLLOW US</h3>


                        <div className="mt-7">
                            <a href="https://facebook.com" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
                                <AiFillFacebook />
                                Like our page</a>
                        </div>

                        <div className="mt-5">
                            <a href="https://instagram.com" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">

                                <AiFillInstagram />
                                See our products</a>
                        </div>
                        <div className="mt-5">
                            <a href="https://x.com" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
                                <AiFillTwitterCircle />
                                Follow Us</a>
                        </div>
                        <div className="mt-5">
                            <a href="https://linkedin.com" className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">

                                <AiFillLinkedin />                                Connect with Us</a>
                        </div>



                    </div>


                    <div><h3 className="font-bold lead lead pb-2 inline px-5  border-b-2 border-white mb-5">Subscribe to our Updates</h3>
                        <div className="flex max-w-xl mt-7">
                            <input type="email" className=' rounded-l p-3 text-black flex-1 focus:outline-none' placeholder='Enter email address' required />

                            <button type="submit" className='bg-[--primary] rounded-r-md px-3 font-bold uppercase'>Subscribe</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12 pb-5">
                <p><AiOutlineCopyright className='inline mr-1' />Copyright {date}, All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer