import React, { useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TopNav from "./TopNav";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AppNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [navItem, setNavItem] = useState("home")
    const cartSize = useSelector(state => state.cart);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const NavList = () => {
        return (
            <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
                <Typography
                    as="li"
                    className="p-1 font-light uppercase tracking-wider text-base text-black"
                >
                    <a href="#" onClick={() => setNavItem("home")} className={`flex items-center transition-all duration-1000 ease-in-out scale-100 
                        hover:scale-110 hover:text-primary ${navItem === "home" ? "scale-110 text-primary border-b-[1px] border-primary" : ""}`}>
                        Home
                    </a>
                </Typography>
                <Typography
                    as="li"
                    className="p-1 font-light uppercase tracking-wider text-base text-black"
                >
                    <a href="#" onClick={() => setNavItem("shop")} className={`flex items-center transition-all duration-1000 ease-in-out scale-100 
                        hover:scale-110 hover:text-primary ${navItem === "shop" ? "scale-110 text-primary border-b-[1px] border-primary" : ""}`}>
                        Shop
                    </a>
                </Typography>
                <Typography
                    as="li"
                    className="p-1 font-light uppercase tracking-wider text-base text-black"
                >
                    <a href="#" onClick={() => setNavItem("promotion")} className={`flex items-center transition-all duration-1000 ease-in-out scale-100 
                        hover:scale-110 hover:text-primary ${navItem === "promotion" ? "scale-110 text-primary border-b-[1px] border-primary" : ""}`}>
                        Promotion
                    </a>
                </Typography>
                <Typography
                    as="li"
                    className="p-1 font-light uppercase tracking-wider text-base text-black"
                >
                    <a href="#" onClick={() => setNavItem("pages")} className={`flex items-center transition-all duration-1000 ease-in-out scale-100 
                        hover:scale-110 hover:text-primary ${navItem === "pages" ? "scale-110 text-primary border-b-[1px] border-primary" : ""}`}>
                        Pages
                    </a>
                </Typography>
                <Typography
                    as="li"
                    className="p-1 font-light uppercase tracking-wider text-base text-black"
                >
                    <a href="#" onClick={() => setNavItem("blogs")} className={`flex items-center transition-all duration-1000 ease-in-out scale-100 
                        hover:scale-110 hover:text-primary ${navItem === "blogs" ? "scale-110 text-primary border-b-[1px] border-primary" : ""}`}>
                        Blogs
                    </a>
                </Typography>
                <Typography
                    as="li"
                    className="p-1 font-light uppercase tracking-wider text-base text-black"
                >
                    <a href="#" onClick={() => setNavItem("contact")} className={`flex items-center transition-all duration-1000 ease-in-out scale-100 
                        hover:scale-110 hover:text-primary ${navItem === "contact" ? "scale-110 text-primary border-b-[1px] border-primary" : ""}`}>
                        Contact
                    </a>
                </Typography>
            </ul>
        );
    }
    return (
        <>
            <TopNav />
            <div className="bg-gray-200">
                <Navbar className="mx-auto p-0 h-32 shadow-none bg-gray-200 border-none">
                    <div className="flex items-center h-full justify-between text-primary">
                        <Typography
                            as={Link}
                            to='/'
                            className="text-4xl uppercase font-bold cursor-pointer"
                        >
                            <span className='text-primary'>All</span>
                            <span className='text-black'>ora</span>
                        </Typography>

                        <div className="hidden lg:block">
                            <NavList />
                        </div>
                        <div>
                            <ul className="flex items-center gap-5">
                                <li className="text-2xl hover:text-primary cursor-pointer">
                                    <GoSearch color="black" className="transition duration-300 ease-out hover:!text-primary" /></li>
                                <li className="relative text-2xl text-black cursor-pointer">
                                    <GoHeart color="black" className="transition duration-300 ease-out hover:!text-primary" />
                                    <span className="absolute -top-2 -right-2 bg-primary rounded-full
                                        w-[18px] h-[18px] text-white flex justify-center items-center text-[11px] font-light">2</span>
                                </li>
                                <Link to='/cart'>
                                    <li className="relative text-2xl text-black cursor-pointer">
                                        <BsCart2 color="black" className="transition duration-300 ease-out hover:!text-primary" />
                                        {cartSize.length > 0 ?
                                            <span className="absolute text-white -top-2 -right-2 bg-primary rounded-full
                                                w-[18px] h-[18px] flex justify-center items-center text-[11px] 
                                                font-light">{cartSize.length}</span> : "" }
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                            )}
                        </IconButton>
                    </div>
                    <Collapse open={openNav}>
                        <NavList />
                    </Collapse>
                </Navbar>
            </div>

        </>
    )
}

export default AppNavbar
