import Link from 'next/link'
import { IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5'
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi'
const Contact = () => {
    return (
        <div className='h-full'>
            <div className="bg-white dark:bg-gray-800 hero h-1/2" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className='hero-overlay bg-opacity-60'></div>
                <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            Talk to Us
                        </span>
                        <span className="block text-indigo-500">
                            It&#x27;s today or never.
                        </span>
                    </h2>
                </div>
            </div>
            <section className="">
                <div className="container px-6 py-12 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-6">
                        <div className="lg:w-1/2 lg:mx-6">
                            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                                Contact us for <br /> more info
                            </h1>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <div className="flex items-start -mx-2">
                                    <IoLocationSharp size={22} />

                                    <p className="mx-2 text-gray-700  w-72 dark:text-gray-400">
                                        <span>
                                            Menara OUM,
                                        </span>
                                        <span>
                                            Block C, Kompleks Kelana Centre Point,
                                        </span>
                                        <span>
                                            Jalan SS7/19, Kelana Jaya,
                                        </span>
                                        <span>
                                            47301 Petaling Jaya, Selangor
                                        </span>
                                        <span>
                                            Malaysia
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <h1 className='font-bold'>Corporate Communication</h1>
                                    <p className="flex items-start -mx-2">
                                        <AiTwotoneMail size={22} />
                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">corpcom@oum.edu.my</span>
                                    </p>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Centre for Learner Affairs</h1>
                                    <p className="flex items-start -mx-2">
                                        <AiTwotoneMail size={22} />
                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">learneraffairs@oum.edu.my</span>
                                    </p>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Accreditation of Prior Experiential Learning Centre</h1>
                                    <p className="flex items-start -mx-2">
                                        <AiTwotoneMail size={22} />
                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">apel@oum.edu.my</span>
                                    </p>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Marketing Office (Enquires for New Intake and Registration Only)</h1>
                                    <p className="flex items-start -mx-2">
                                        <AiTwotoneMail size={22} />
                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">admission@oum.edu.my</span>
                                    </p>
                                    <br />
                                    <p className="flex items-start -mx-2">
                                        <AiFillPhone size={22} />

                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(603) 7801 1800 <span className='font-bold'>(General Line)</span></span>
                                    </p>
                                    <p className="flex items-start -mx-2">
                                        <AiFillPhone size={22} />

                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(603) 7801 2000 <span className='font-bold'>(Speed Line)</span></span>
                                    </p>
                                    <br />
                                    <p className="flex items-start -mx-2">
                                        <IoLogoWhatsapp size={22} />

                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(012) 303 9935</span>
                                    </p>
                                    <p className="flex items-start -mx-2">
                                        <IoLogoWhatsapp size={22} />

                                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(019) 357 9074</span>
                                    </p>
                                </div>

                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="font-bold ">Connect with us</h3>
                                <div className="grid grid-flow-col mt-2">
                                    <Link href={"#"}><BiLogoFacebook size={24} className='hover:text-green-500' /></Link>
                                    <Link href={"#"}><BiLogoTwitter size={24} className='hover:text-green-500' /></Link>
                                    <Link href={"#"}><BiLogoLinkedinSquare size={24} className='hover:text-green-500' /></Link>
                                    <Link href={"#"}><BiLogoInstagram size={24} className='hover:text-green-500' /></Link>
                                    <Link href={"#"}><BiLogoYoutube size={24} className='hover:text-green-500' /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div
                                className="w-full px-8 py-10 mx-auto overflow-hidden rounded-lg shadow-2xl  lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1>

                                <form className="mt-6">
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm ">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm ">Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600   dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm ">Phone number</label>
                                        <input type="email" placeholder="012-3456789" className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600   dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm ">Message</label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                    </div>

                                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        get in touch
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact