import React from 'react'

const Header = () => {
    return (
        <div className=" h-80 pt-16 "
            style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LTT9jyyREKkifTAjhiKBhdD3D4gvEBUg6Q&usqp=CAU')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div>
                <h1 className="flex justify-center text-3xl font-bold uppercase pb-6">
                    about 
                </h1>
                <p className="flex justify-center items-center">
                    Lorem Ipsum is simply dummy text of the printing <br /> and
                    typesetting industry. Lorem Ipsum has been <br /> the industry's
                    standard dummy text ever since the 1500s, when an <br /> unknown
                    printer took a galley of type and scrambled it to <br /> make a
                    type specimen book. It has survived not only five centuries,
                </p>
            </div>
        </div>
    )
}

export default Header