
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

interface NavbarProps {
    activeLink: string; // Change the type based on what 'activeLink' should be
}

const BottomNavbar: React.FC<NavbarProps> = ({ activeLink }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 10) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    console.log("actveee", activeLink)

    window.addEventListener('scroll', changeColor)

    return (
        <>

            <nav className={`fixed top-0 bg-zinc-50 shadow-lg z-50 w-full flex flex-wrap items-center justify-between py-2 ${color
                ? 'lg:bg-zinc-50 lg:top-0 transition-all duration-500 ease-in'
                : 'lg:bg-transparent shadow-none lg:top-7 transition-all duration-500 ease-out'}`}>
                <div className=" max-w-screen-xl container xl:px-4 px-10 mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to={"/"}
                            className="text-slg font-bold leading-relaxed inline-block mr-4 whitespace-nowrap  text-black"

                        >
                            <span><img src={logo} className='w-32' /></span>
                        </Link>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none py-2 lg:py-0 space-y-3 lg:space-y-0 lg:ml-auto">
                            <li className='nav-item'>
                                <Link to={"/"} className="px-7 flex items-center text-xs uppercase font-medium leading-snug "                                                                 >
                                    <span className={`py-1 border-b-2 hover:border-slate-900 hover:text-slate-900  ${activeLink === 'home' ? 'text-slate-900 font-bold border-slate-900' : 'border-transparent'}`}>HOME</span>
                                </Link>

                            </li>
                            <li className='nav-item'>
                                <Link to={"/about"} className="px-7 flex items-center text-xs uppercase font-medium leading-snug ">
                                    <span className={`py-1 border-b-2 hover:border-slate-900 hover:text-slate-900  ${activeLink === 'about' ? 'text-slate-900 font-bold border-slate-900' : 'border-transparent'}`}>ABOUT US</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={"/gallery"} className="px-7  flex items-center text-xs uppercase font-medium leading-snug ">
                                    <span className={`py-1 border-b-2 hover:border-slate-900 hover:text-slate-900  ${activeLink === 'gallery' ? 'text-slate-900 font-bold border-slate-900' : 'border-transparent'}`}>GALLERY</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={"/services"} className="px-7  flex items-center text-xs uppercase font-medium leading-snug ">
                                    <span className={`py-1 border-b-2 hover:border-slate-900 hover:text-slate-900  ${activeLink === 'services' ? 'text-slate-900 font-bold border-slate-900' : 'border-transparent'}`}>SERVICES</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/projects'} className="px-7  flex items-center text-xs uppercase font-medium leading-snug ">
                                    <span className={`py-1 border-b-2 hover:border-slate-900 hover:text-slate-900  ${activeLink === 'projects' ? 'text-slate-900 font-bold border-slate-900' : 'border-transparent'}`}>PROJECTS</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/contact'} className="ps-7  flex items-center text-xs uppercase font-medium leading-snug ">
                                    <span className={`py-1 border-b-2 hover:border-slate-900 hover:text-slate-900  ${activeLink === 'contact' ? 'text-slate-900 font-bold border-slate-900' : 'border-transparent'}`}>CONTACT</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default BottomNavbar