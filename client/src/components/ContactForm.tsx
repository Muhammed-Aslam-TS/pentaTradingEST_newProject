
const ContactForm = () => {

    return (
        <div className=" mt-80">
            <div
                className="bg-gray-300 bg-fixed w-5/6 mx-auto p-10 flex absolute bottom-2/4 left-0 right-0 z-10 rounded-xl"
                style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className=" h-auto w-6/12">
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
                <div className=" h-auto w-6/12  ">


                    <form className="bg-gray-700 p-6 w-5/6 rounded-xl mx-auto">
                        <h1 className="text-5xl font-semibold text-gray-200 ">Contact form</h1>
                        <div className="my-4 text-gray-300">Or, you can just send an email: info@charity.org</div>
                        <div className="mb-6">
                            <input type="text" id="fullname" className="bg-gray-100 outline-none text-gray-900 text-sm rounded-2xl block w-full p-2.5  py-5" placeholder="Full Name" required />
                        </div>
                        <div className="mb-6">
                            <input type="email" id="email" className="bg-gray-100 outline-none text-gray-900 text-sm rounded-2xl block w-full p-2.5  py-5" placeholder="Email" required />
                        </div>
                        {/* <div className="mb-6">
                            <input type="number" id="mobile" className="bg-gray-100 outline-none text-gray-900 text-sm rounded-2xl block w-full p-2.5  py-5" placeholder="Mobile" required />
                        </div> */}
                        <div className="mb-6">
                            <textarea
                                id="message"
                                className="bg-gray-100 outline-none h-32 text-gray-900 text-sm rounded-2xl block w-full p-2.5 py-5 resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>


                        {/* <div className="relative h-14 w-full min-w-[200px]">
                            <input
                                className="peer h-full w-full rounded-[7px]  bg-gray-50  px-3 p-2.5 text-lg font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-gray-700 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-lg before:border-t before:border-l before:border-blue-gray-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-indigo-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Fullname
                            </label>
                        </div> */}



                        <button className=" w-full mt-8 text-base justify-between  focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-5 px-8 bg-gray-800 flex items-center rounded-xl">
                            Submit
                            <div className="ml-2 mt-0.5">
                                <svg
                                    className="fill-stroke"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.33325 8H12.6666"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10 10.6667L12.6667 8"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10 5.33301L12.6667 7.99967"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ContactForm