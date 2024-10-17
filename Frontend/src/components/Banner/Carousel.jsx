import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

const MyCarousel = () => {
    return (
        <>
            <Carousel autoplay={true} loop={true} transition={{ duration: 1 }}>
                <div className="relative h-[450px] w-full">
                    <img
                        src="men.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/45">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                <h1>Men Fashion</h1>
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam.</p>
                            </Typography>
                            <Button size="lg" className='bg-primary rounded-none hover:bg-black'>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative h-[450px] w-full">
                    <img
                        src="women.jpg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/45">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                <h1>Women Fashion</h1>
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam.</p>
                            </Typography>
                            <Button size="lg" className='bg-primary rounded-none hover:bg-black'>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default MyCarousel
