import banner from '../assets/images/banner2.jpg'

const Banner = () => {
  return (
    <>
      <div className="hidden  h-screen lg:flex  items-center justify-center relative">
      <div className=" relative z-10 flex w-full ">
        <div className="w-1/2 p-3 pl-32">
          <p className='text-3xl py-3'>Lorem Ipsum is simply dummy<br/> text of the printing and <br/>typesetting industry.</p>
          <div className='py-5'>
          when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
          </div>
          <button className="sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
            Explore
            <div className="ml-2 mt-0.5">
            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
        </div>
        <div className="w-1/2 ">
          <img src={banner} alt="Your Image" className="object-cover h-full w-full" 
          style={{ borderRadius: "5px",  boxShadow: "rgba(40, 36, 36, 0.2) -10px 10px 10px" }}/>         
        </div>
      </div>
      <div className="absolute top-0 left-0 h-3/4 w-10/12 before:bg-gray-200 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-0"></div>
    </div>

        <div className="lg:hidden h-screen z-10 flex flex-col w-full px-6">
          <div>
            <img src={banner} alt="Your Image" className="object-cover h-full w-full"/>
          </div>
          <div className="p-8 mt-5 bg-gray-200">
            <p className='text-3xl py-3'>Lorem Ipsum is simply dummy<br /> text of the printing and <br />typesetting industry.</p>
            <div className='py-5'>
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </div>
            <button className="sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
              Explore
              <div className="ml-2 mt-0.5">
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>



      <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 2xl:mx-auto 2xl:container">
        <div className="z-30 relative lg:w-1/2">
          <div className="hidden bg-gray-300 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
            <div className="w-full lg:w-auto lg:-mr-32">
              <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
            </div>
          </div>
          <div className="absolute top-0  bg-gray-300 md:h-96 w-full hidden md:block lg:hidden"></div>
          <div className="w-full h-full lg:hidden">
            <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
          </div>
        </div>
        <div className="bg-gray-300 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
          <div>
            <h1 className="md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">Modern Interior Decor</h1>
            <p className=" md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc.</p>
            <button className="sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
              Explore
              <div className="ml-2 mt-0.5">
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Banner