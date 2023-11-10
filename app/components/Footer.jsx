import React from 'react'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi'
const Footer = () => {
    return (
        <div className=''>
            <footer className="footer bg-blue-900 p-10 text-white">
                <nav>
                    <header className="footer-title">Reach Us At</header>
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
                    <br />
                    <span>
                        +603-7801 1800 (General Line)
                    </span>
                    <span>
                        +603-7801 2000 (Speed Line)
                    </span>
                    <span>
                        +6012-303 9935 / +6019-357 9074
                    </span>
                    <span>
                        admission@oum.edu.my
                    </span>
                    <span>
                        (Enquiries for New Intake & Registration Only)
                    </span>
                </nav>
                <nav>
                    <span>Monday-Thursday:</span>
                    <span>8:30 am - 5:30 pm</span>
                    <span>Friday:</span>
                    <br />
                    <span>Marketing Office:</span>
                    <span>Monday - Sunday</span>
                    <span>9:00 am - 4:00 pm</span>
                    <span>Closed on Public Holidays</span>
                    <br />
                    <span>Learning Centres</span>
                    <span>Tuesday - Sunday</span>
                    <span>9:00 am - 5:00 pm</span>
                    <span>Closed on Monday and Public Holidays</span>
                </nav>
                <nav>
                    <header className="footer-title">Admission</header>
                    <Link href={"#"} className='hover:text-green-500 '>Malaysian Admission</Link>
                    <Link href={"#"} className='hover:text-green-500'>International Admission</Link>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <Link href={"#"} className='hover:text-green-500 '>Learner / Tutor</Link>
                    <Link href={"#"} className='hover:text-green-500 '>Staff</Link>
                    <Link href={"#"} className='hover:text-green-500 '>Online Score Entry System</Link>
                    <Link href={"#"} className='hover:text-green-500 '>TSDAS Digital Library</Link>
                    <Link href={"#"} className='hover:text-green-500 '>myOER</Link>
                    <Link href={"#"} className='hover:text-green-500 '>OUM Graduates</Link>
                    <Link href={"#"} className='hover:text-green-500 '>27th Convocation</Link>
                    <Link href={"#"} className='hover:text-green-500 '>Publications</Link>
                    <Link href={"#"} className='hover:text-green-500 '>Careers</Link>
                    <Link href={"#"} className='hover:text-green-500 '>Vendor Registration</Link>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 text-base-content bg-blue-950">
                <aside className="items-center grid-flow-col">
                    <p>&#169; 2023 Open University Malaysia Replica</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end ">
                    <div className="grid grid-flow-col gap-4">
                        <h1>Connect with us at</h1>
                        <Link href={"#"}><BiLogoFacebook size={20} className='hover:text-green-500' /></Link>
                        <Link href={"#"}><BiLogoTwitter size={20} className='hover:text-green-500' /></Link>
                        <Link href={"#"}><BiLogoLinkedinSquare size={20} className='hover:text-green-500' /></Link>
                        <Link href={"#"}><BiLogoInstagram size={20} className='hover:text-green-500' /></Link>
                        <Link href={"#"}><BiLogoYoutube size={20} className='hover:text-green-500' /></Link>
                    </div>
                </nav>
            </footer></div >
    )
}

export default Footer