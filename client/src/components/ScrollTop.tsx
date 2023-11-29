import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";


const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div
                    className="fixed bottom-10 right-10 z-50 cursor-pointer text-white bg-blue-500  p-2"
                    onClick={scrollToTop}
                >
                    <FaArrowUp />
                </div>
            )}
        </div>
    );
};

export default ScrollTop