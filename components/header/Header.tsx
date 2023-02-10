import Link from 'next/link'
import React from 'react'
import { TbMenu } from 'react-icons/tb'
import SearchBar from './items/SearchBar'

function Header({withSearchBar = true, toggleMenu}: {toggleMenu?: any, withSearchBar?: boolean}) {
  return (
    <header className="container py-4">
       <nav className='flex justify-between items-center'>
        <Link href="/" className='text-orange-600 uppercase title text-5xl'>LEGANDA
        </Link>
        {withSearchBar ? <SearchBar /> : null }
        <ul className='md:flex justify-between items-center hidden'>
          <li>
            <Link href="https://chillo.tech/nos-postes" target="_blank" className='font-extrabold uppercase text-lg text-white'>
              Rejoignez nous
            </Link>
          </li>
          <li  className='ml-2'>
            <Link href="#contact" className='font-extrabold uppercase text-lg text-white'>
              Contactez nous
            </Link>
          </li>
        </ul>
        <button type='button' onClick={toggleMenu} className="md:hidden">
          <TbMenu className="text-white text-5xl font-extralight"/>
        </button>
      </nav>
    </header>
  )
}

export default Header
