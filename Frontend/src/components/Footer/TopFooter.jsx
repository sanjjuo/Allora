import React from 'react'

const TopFooter = () => {
  return (
    <div className='bg-gray-200'>
       <div className="container mx-auto py-8">
            <div className='lg:flex lg:justify-between lg:items-center px-3 lg:px-0 space-y-3 lg:space-y-0'>
                <ul>
                    <li className='text-2xl font-semibold'>Newsletter</li>
                    <li className='text-gray-600 font-light'>Subscribe to our newsletter and get 20% off your first purchase</li>
                </ul>
                <ul className='flex items-center gap-1'>
                    <li><input type="email" name="email" id="email" placeholder='Your email' className='px-2 py-3 focus:outline-none w-[100%]'/></li>
                    <li><button type="button" className='bg-primary text-white px-5 py-3'>Subscribe</button></li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default TopFooter
