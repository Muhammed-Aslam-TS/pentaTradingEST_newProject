import { MdMiscellaneousServices } from 'react-icons/md'

const Services = () => {
    return (
        <>
            <section className="bg-gray-900">
                <div className="mx-auto grid max-w-xl gap-x-12 gap-y-12 px-4 py-20 md:max-w-screen-xl md:grid-cols-2 md:px-4 lg:grid-cols-3">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-medium text-white">
                            Unmatched <br />
                            Services.<br />
                            Unmatched <br />
                            Excellence.
                        </h2>
                        <div className="flex items-end">
                            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900 relative group  hover:w-20 transition-all duration-300 transform hover:-translate-y-6">
                                <span className='absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-bold duration-300'>More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-0 group-hover:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>



                        </div>
                    </div>

                    <div className="border-white/40 text-white/40 relative border-4 px-4 pt-14 pb-8 cursor-pointer hover:border-white hover:text-white hover:transform hover:scale-110 transition duration-300">
                        <div className="absolute -top-8 left-8 bg-gray-900 px-4 text-white">
                            <MdMiscellaneousServices className="h-16 w-16" />
                        </div>
                        <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                    <div className="border-white/40 text-white/40 relative border-4 px-4 pt-14 pb-8 cursor-pointer hover:border-white hover:text-white hover:transform hover:scale-110 transition duration-300">
                        <div className="absolute -top-8 left-8 bg-gray-900 px-4 text-white">
                            <MdMiscellaneousServices className="h-16 w-16" />
                        </div>
                        <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    
                    <div className="border-white/40 text-white/40 relative border-4 px-4 pt-14 pb-8 cursor-pointer hover:border-white hover:text-white hover:transform hover:scale-110 transition duration-300">
                        <div className="absolute -top-8 left-8 bg-gray-900 px-4 text-white">
                            <MdMiscellaneousServices className="h-16 w-16" />
                        </div>
                        <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    
                    <div className="border-white/40 text-white/40 relative border-4 px-4 pt-14 pb-8 cursor-pointer hover:border-white hover:text-white hover:transform hover:scale-110 transition duration-300">
                        <div className="absolute -top-8 left-8 bg-gray-900 px-4 text-white">
                            <MdMiscellaneousServices className="h-16 w-16" />
                        </div>
                        <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    
                    <div className="border-white/40 text-white/40 relative border-4 px-4 pt-14 pb-8 cursor-pointer hover:border-white hover:text-white hover:transform hover:scale-110 transition duration-300">
                        <div className="absolute -top-8 left-8 bg-gray-900 px-4 text-white">
                            <MdMiscellaneousServices className="h-16 w-16" />
                        </div>
                        <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    
                </div>
            </section>


        </>
    )
}

export default Services