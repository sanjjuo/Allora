import React from 'react'
import MyCarousel from './Carousel'
import { Button } from '@material-tailwind/react'

const Banner = () => {
    return (
        <>
            <div className='pt-0'>
                {/* <div className="container mx-auto"> */}
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
                        <div className='lg:col-span-4'>
                            <MyCarousel />
                        </div>
                        <div className='space-y-2 lg:col-span-2'>
                            <div className='relative w-full h-[220px]'>
                                <img src="offer.jpg" alt="" className='w-full h-full object-cover' />
                                <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black/45'>
                                    <h1 className='text-sm font-semibold mb-2 uppercase'>Save 20%</h1>
                                    <h2 className='text-4xl mb-4 font-extrabold'>Special Offer</h2>
                                    <Button className='bg-primary rounded-none hover:bg-black'>Shop Now</Button>
                                </div>
                            </div>

                            <div className='relative w-full h-[220px]'>
                                <img src="watches.jpg" alt="" className='w-full h-full object-cover' />
                                <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black/45'>
                                    <h1 className='text-sm font-semibold mb-2 uppercase'>Save 20%</h1>
                                    <h2 className='text-4xl mb-4 font-extrabold'>Special Offer</h2>
                                    <Button className='bg-primary rounded-none hover:bg-black'>Shop Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Banner
