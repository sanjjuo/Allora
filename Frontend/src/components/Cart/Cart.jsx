import React from 'react'
import { GoHeart } from 'react-icons/go'
import { Table } from './Table'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    return (
        <>
            <div className="container mx-auto py-10">
                <h1 className='flex items-center justify-center text-4xl text-gray-700 font-light gap-1'>My Cart <GoHeart className='text-primary'/></h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 mt-10'>
                    <div className='col-span-3'>
                        <Table cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
