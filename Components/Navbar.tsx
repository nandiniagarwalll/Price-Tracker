import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
        <Image src='/assets/logo.png' width={27} height={27} alt='logo ' />

        <p className='nav-logo'>
            Price<span className='text-primary'>Tracker</span>
        </p>
        </Link>

        <div className='flex items-center gap-5'>
            <Image
                src='/assets/search.png'
                width={27}
                height={27}
                alt="search logo"
            />
            <Image
                src='/assets/heart.png'
                width={27}
                height={27}
                alt="heart logo"
            />
            <Image
                src='/assets/user.png'
                width={27}
                height={27}
                alt="user logo"
            />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
