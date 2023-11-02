
import { useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

const BottomNavbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>("home");

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setNavbarOpen(false);
    };

    const [color,setColor] = useState(false)

    const changeColor=()=>{
        if(window.scrollY >=10){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll',changeColor)
   
    return (
        <>
    
      <nav className={`fixed top-0 bg-white z-50 w-full flex flex-wrap items-center justify-between py-5 ${color
            ? 'lg:bg-white lg:top-0 transition-all duration-500 ease-in'
            : 'lg:bg-transparent lg:top-7 transition-all duration-500 ease-out'}`}>             
                <div className=" max-w-screen-xl container md:px-4 px-10  mx-auto flex flex-wrap items-center justify-between">

                              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-slg font-bold leading-relaxed inline-block mr-4 whitespace-nowrap  text-black"
                            href="#pablo"
                        >
                            Penta <span className='font-medium'>Trading Est</span>
                        </a>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <RxHamburgerMenu/>
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
                                <a className="px-7  flex items-center text-xs uppercase font-medium leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                    onClick={() => handleOptionClick('home')}
                                >
                                    <span className={`py-1 ${selectedOption === 'home' ? 'border-b-2 border-black' : ''}`}>HOME</span>
                                </a>
                            </li>
                           <li className='nav-item'>
                                <a className="px-7  flex items-center text-xs uppercase font-medium leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                     onClick={() => handleOptionClick('about')}
                                >
                                    <span className={`py-1 ${selectedOption === 'about' ? 'border-b-2 border-black' : ''}`}>ABOUT US</span>
                                </a>
                            </li>
                           <li className='nav-item'>
                                <a className="px-7  flex items-center text-xs uppercase font-medium leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                     onClick={() => handleOptionClick('gallery')}
                                >
                                    <span className={`py-1 ${selectedOption === 'gallery' ? 'border-b-2 border-black' : ''}`}>GALLERY</span>
                                </a>
                            </li>
                           <li className='nav-item'>
                                <a className="px-7  flex items-center text-xs uppercase font-medium leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                     onClick={() => handleOptionClick('service')}
                                >
                                    <span className={`py-1 ${selectedOption === 'service' ? 'border-b-2 border-black' : ''}`}>SERVICE</span>
                                </a>
                            </li>
                           <li className='nav-item'>
                                <a className="px-7  flex items-center text-xs uppercase font-medium leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                     onClick={() => handleOptionClick('projects')}
                                >
                                    <span className={`py-1 ${selectedOption === 'projects' ? 'border-b-2 border-black' : ''}`}>PROJECTS</span>
                                </a>
                            </li>
                           <li className='nav-item'>
                                <a className="ps-7  flex items-center text-xs uppercase font-medium leading-snug text-black hover:opacity-75"
                                    href="#pablo"
                                     onClick={() => handleOptionClick('contact')}
                                >
                                    <span className={`py-1 ${selectedOption === 'contact' ? 'border-b-2 border-black' : ''}`}>CONTACT</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
      );
    }
export default BottomNavbar