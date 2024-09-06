import { NavLink } from "react-router-dom";
import { FaCartPlus, FaHeart, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";
// import { useEffect, useState } from "react";

const Navbar = () => {
    // const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', localTheme)
    // }, [theme])
    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme('synthwave')
    //     }
    //     else {
    //         setTheme('light')
    //     }
    // }
    const navLinks = (
        <>
            <div className="md:space-x-5 lg:space-x-8">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold text-purple-800 "
                            : "font-semibold relative after:absolute after:bottom-5 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500 hover:skew-y-3 hover:scale-90 hover:transition-all hover:duration-300"
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold text-purple-800 "
                            : "font-semibold relative after:absolute after:bottom-5 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500 hover:skew-y-3 hover:scale-90 hover:transition-all hover:duration-300"
                    }
                    to="/products"
                >
                    Shop
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold text-purple-800 "
                            : "font-semibold relative after:absolute after:bottom-5 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500 hover:skew-y-3 hover:scale-90 hover:transition-all hover:duration-300"
                    }
                    to="/about-us"
                >
                    About Us
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold text-purple-800 "
                            : "font-semibold relative after:absolute after:bottom-5 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-500 hover:skew-y-3 hover:scale-90 hover:transition-all hover:duration-300"
                    }
                    to="/blog"
                >
                    Blog
                </NavLink>
            </div>
        </>
    );

    return (
        <div className="bg-transparent pt-4">
            {/* first nav */}
            <div className="flex justify-between items-center">
                <div className="mb-2">
                    <img className="h-10 w-28" src="/LOGO.png" alt="" />
                </div>
                <div className="text-xs">
                    {
                        navLinks
                    }
                </div>
            </div>
            {/* second nav */}
            <div className="flex justify-between items-center">
                <h1>Second Nav</h1>
            </div>
        </div>
    );
};

export default Navbar;
