import { BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md'

const TopNavbar = () => {
    return (
        <nav className="bg-cyan-950 text-white ">
            <div className="max-w-screen-xl sm:px-0 flex items-center justify-between mx-auto ">
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <ul className='flex flex-col sm:flex-row text-xs md:space-x-4 px-4 font-light sm:space-y-0 space-y-2'>
                        <li className='flex items-center'>
                            <a className='flex space-x-1'>
                                <MdLocationOn size={15} />
                                <span>Riyadh 6507 PB# 1336 Saudi Arabia</span>
                            </a>
                        </li>
                        <li className='hidden md:block'>
                            <span className='text-lg text-gray-500'>|</span>
                        </li>
                        <li className='flex items-center'>
                            <a className='flex space-x-1'>
                                <MdEmail size={15} /> 
                                <span>info@pentatradingsa.com</span>
                            </a>
                        </li>
                        <li className='hidden md:block'>
                            <span className='text-lg text-gray-500'>|</span>
                        </li>
                        <li className='flex items-center'>
                            <a className='flex space-x-1'>
                                <MdCall size={15} /> 
                                <span>+966 569351069</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-4 px-4 text-lg">
                        <li>
                            <a href="#" className=""><BiLogoFacebookCircle /></a>
                        </li>
                        <li>
                            <a href="#" className=""><BiLogoInstagramAlt /></a>
                        </li>
                        <li>
                            <a href="#" className=""><AiFillTwitterCircle /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNavbar;
