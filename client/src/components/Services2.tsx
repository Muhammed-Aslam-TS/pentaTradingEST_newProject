
const Services2 = () => {
  return (
    <div className="mx-auto my-10 grid max-w-screen-xl grid-cols-1 px-10 text-blue-800  lg:grid-cols-3">
      <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
        <div className="flex justify-between">
          <h2 className="text-3xl font-medium text-blue-900">
            Unmatched <br />
            Services.<br />
            Unmatched <br />
            Excellence.
          </h2>
          <div className="flex items-end">
            <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-900 relative group  hover:w-20 transition-all duration-300 transform hover:-translate-y-6">
              <span className='absolute left-1/2 transform text-white -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-bold duration-300'>More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform rotate-0 group-hover:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-blue-50 p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
        <div className="relative flex gap-5">
          <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">01</div>
          <div className="">
            <h3 className="text-xl font-semibold">Beginning</h3>
            <p className="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
        </div>
        <div className="relative flex gap-5">
          <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">02</div>
          <div className="">
            <h3 className="text-xl font-semibold">Storytelling</h3>
            <p className="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
        </div>
        <div className="relative flex gap-5">
          <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">03</div>
          <div className="">
            <h3 className="text-xl font-semibold">Keeping the reader hooked</h3>
            <p className="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
        </div>
        <div className="relative flex gap-5">
          <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">04</div>
          <div className="">
            <h3 className="text-xl font-semibold">Ending with a hook</h3>
            <p className="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services2