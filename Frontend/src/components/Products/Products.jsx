import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { GoHeart } from "react-icons/go";
import { BsEye } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import axios from 'axios';
import { PRODUCTS_URL } from '../../Api';
import { ProductModal } from './ProductModal';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../Store/CartSlice';
import { getProducts } from '../../Store/ProductSlice';

const Products = () => {
    const [open, setOpen] = useState(false);
    const disPatch = useDispatch()
    const { data: products } = useSelector(state => state.products);

    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        // dispatch an action for fetch products
        disPatch(getProducts())
    }, []);

    const addToCart = (product) => {
        // dispatch an add action
        disPatch(add(product))
    }

    return (
        <>
            <div className="container mx-auto py-20 px-3 lg:px-0">
                <ul className='flex items-center justify-center gap-2'>
                    <li className='h-[2px] rounded-full bg-gray-300 w-full'></li>
                    <li className='uppercase text-3xl font-light tracking-wider'>Products</li>
                </ul>
                <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 gap-3">
                    {products.length > 0 ? (
                        products.slice(0, 15).map((product, index) => (
                            <div className='group cursor-pointer border-[1px] border-gray-200 p-2' key={index}>
                                <div className='relative w-full h-[300px] overflow-hidden'>
                                    <img src={product.image} alt={product.name} className='w-full h-full object-contain transition duration-700 
                                    ease-in-out scale-100 group-hover:scale-110' />
                                    <ul className='absolute top-3 right-3 space-y-1'>
                                        <li onClick={() => addToCart(product)} className='bg-primary p-3 transition ease-in-out duration-500 translate-x-10 opacity-0 
                                    group-hover:translate-x-0 group-hover:opacity-100'><BsCart2 size={23} className='text-white' /></li>
                                        <li onClick={handleOpen} className='bg-primary p-3 transition ease-in-out duration-700 translate-x-10 opacity-0 
                                    group-hover:translate-x-0 group-hover:opacity-100'><BsEye size={23} className='text-white' /></li>
                                        <li className='bg-primary p-3 transition ease-in-out duration-1000 translate-x-10 opacity-0 
                                    group-hover:translate-x-0 group-hover:opacity-100'><HiMiniArrowPathRoundedSquare size={23} className='text-white' /></li>
                                    </ul>
                                </div>
                                <div className='flex items-baseline justify-between gap-1 mt-2 bg-gray-200 p-2'>
                                    <div>
                                        <h1 className='text-gray-700 line-clamp-1'>{product.title}</h1>
                                        <h4 className='text-gray-900 font-semibold'>${product.price}</h4>
                                    </div>
                                    <div>
                                        <GoHeart className='text-gray-700' size={18} />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='col-span-5 flex justify-center items-center w-full h-[350px]'>
                            <img src="no.png" alt="" className='w-full h-full object-contain' />
                        </div>
                    )}
                </div>
            </div>
            <ProductModal open={open} handleOpen={handleOpen} />
        </>
    );
};

export default Products;
