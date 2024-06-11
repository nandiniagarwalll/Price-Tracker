"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages=[
    {imgUrl:'/assets/chair.jpg',alt:'chair'},
    {imgUrl:'/assets/ipad.jpg',alt:'ipad'},
    {imgUrl:'/assets/mirror.jpg',alt:'mirror'},
    {imgUrl:'/assets/shelf.jpg',alt:'shelf'},
    {imgUrl:'/assets/shoes.jpg',alt:'shoes'},
]

const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
    <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}>
            {heroImages.map((image)=>(
                <Image
                    src={image.imgUrl}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className='object-contain'
                    key={image.alt}
                />
            ))}
     </Carousel>

     <Image
     src='/assets/handdrawnarrow.png'
     alt='handdrawnarrow' 
     width={75}
     height={75}
     className='max-xl:hidden absolute -left-[15%] bottom-0 z-0'/>
     </div>
  )
}

export default HeroCarousel
