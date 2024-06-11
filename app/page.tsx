import React from 'react'
import Image from 'next/image'
import Searchbar from '@/Components/Searchbar'
import HeroCarousel from '@/Components/HeroCarousel'

const Home = () => {
  return (
    <>
    <section className='px-6 md:px-20 py-24 border-emerald-300'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
          <p className='small-text'>
            Here is your personalised price tracker
            <Image
              src='/assets/rightarrow.png'
              width={16}
              height={16}
              alt='rightarrow' 
            />
          </p>

          <h1 className='head-text'>
            Start your journey here
          </h1>

          <p className='mt-6'>
          Powerful, self-serve product 
          and growth analytics to help 
          you convert, engage, and 
          retain more.
          </p>

          <Searchbar />
        </div>

        <HeroCarousel />
      </div>
    </section>

    <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>

      <div className='flex flex-wrap gap-x-8 gap-y-16'>
        {['Apple iphone 15','book','sneakers'].map((product)=>(
          <div>{product}</div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Home
