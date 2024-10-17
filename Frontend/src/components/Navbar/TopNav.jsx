import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography
} from "@material-tailwind/react";

const AppMenu = ({ title, items }) => {
    return (
        <Menu>
            <MenuHandler>
                <Typography className='cursor-pointer'><h4>{title}</h4></Typography>
            </MenuHandler>
            <MenuList className='rounded-none'>
                {items.map((item, index) => (
                    <MenuItem key={index}>{item}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

const TopNav = () => {
    return (
        <>
            <div className='bg-blue-gray-900 hidden lg:block'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center py-3'>
                        <div>
                            <ul className='flex gap-10'>
                                <li className='text-base text-white font-light cursor-pointer capitalize'>free shipping on all u.s orders over $50</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex gap-10'>
                                <li className='text-base text-white font-light hover:text-primary'>
                                    <AppMenu
                                        title="USD"
                                        items={['EUR', 'GBP', 'CAD']}
                                    />
                                </li>
                                <li className='text-base text-white font-light hover:text-primary'>
                                    <AppMenu
                                        title="EN"
                                        items={['FR', 'HIN', 'RUS']}
                                    />
                                </li>
                                <li className='text-base text-white font-light hover:text-primary'>
                                    <AppMenu
                                        title="My Account"
                                        items={['Sign in', 'Sign up']}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopNav;
