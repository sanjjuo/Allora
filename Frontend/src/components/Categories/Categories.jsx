import React from 'react'
import { categories } from '../../Data'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
      <div className="container mx-auto pt-20 px-3 lg:px-0">
        <ul className='flex items-center justify-center gap-2'>
          <li className='uppercase text-3xl font-light tracking-wider'>categories</li>
          <li className='h-[2px] rounded-full bg-gray-300 w-full'></li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-10">
          {
            categories.map((item, index) => (
              <div className='relative border border-gray-200 cursor-pointer group overflow-hidden' key={index}>
                <div className='w-full h-[250px]'>
                  <img src={item.image} alt="" className='w-full h-full object-cover transition duration-700 ease-in-out scale-100 group-hover:scale-110' />
                </div>
                <div className='absolute inset-0 flex justify-center items-end'>
                  <h4 className='text-white uppercase font-thin text-[60px] tracking-widest px-6 py-2'>{item.title}</h4>
                </div>
                <Link to='/category'>
                  <div className='absolute inset-0 flex justify-center items-center transition duration-700 ease-out scale-0 opacity-0 
                group-hover:opacity-100 group-hover:scale-100'>
                    <Button className='bg-primary rounded-none tracking-wider hover:bg-black'>Show all</Button>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Categories
