import React from 'react'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className=''>
            <div>
                <div className='bg-blue-950 flex justify-end pr-4'>
                    <Link href={"https://www.oum.edu.my/"} className='text-white hover:text-green-600'>
                        OUM Real Website
                    </Link>
                </div>
                <nav className="shadow-md shadow-blue-950 py-4 ">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className=" flex items-center">
                                <Link href={"/"} className=''>
                                    <Image src={"/oumhome.png"} width={150} height={150} />
                                </Link>
                                <div className="hidden md:block">
                                    <div className="flex items-center ml-10 space-x-4">
                                        <Link className="hover:text-blue-700 hover:underline underline-offset-8 decoration-green-600 decoration-4 px-3 py-2 rounded-md text-md font-semibold" href="/aboutus">
                                            ABOUT US
                                        </Link>
                                        <Link className="hover:text-blue-700 hover:underline underline-offset-8 decoration-green-600 decoration-4 px-3 py-2 rounded-md text-md font-semibold" href="/programmes">
                                            PROGRAMMES
                                        </Link>
                                        <Link className="hover:text-blue-700 hover:underline underline-offset-8 decoration-green-600 decoration-4 px-3 py-2 rounded-md text-md font-semibold" href="/centres">
                                            LEARNING CENTERS
                                        </Link>
                                        <Link className="hover:text-blue-700 hover:underline underline-offset-8 decoration-green-600 decoration-4 px-3 py-2 rounded-md text-md font-semibold" href="/admissions">
                                            ADMISSIONS
                                        </Link>
                                        <Link className="hover:text-blue-700 hover:underline underline-offset-8 decoration-green-600 decoration-4 px-3 py-2 rounded-md text-md font-semibold" href="/contact">
                                            TALK TO US
                                        </Link>
                                        <Link className="hover:text-blue-700 hover:underline underline-offset-8 decoration-green-600 decoration-4 px-3 py-2 rounded-md text-md font-semibold" href="/convocation">
                                            CONVOCATION
                                        </Link>
                                        <button className="hover:text-blue-700">
                                            <FiSearch size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar