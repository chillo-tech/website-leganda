import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import SearchBar from './items/SearchBar'

function Header({withSearchBar = true}: {withSearchBar?: boolean}) {
  return (
    <header>
       <nav className='flex justify-between items-center'>
        <Link href="/">
          <a className='text-orange-600 uppercase title text-5xl'>LEGANDA</a>
        </Link>
        {withSearchBar ? <SearchBar /> : null }
        <ul className='md:flex justify-between items-center hidden'>
          <li>
            <Link href="/">
              <a className='border border-orange-600 rounded-3xl px-5 py-2 text-orange-600 flex justify-between items-center'>
                <FontAwesomeIcon icon={faUser} className="hidden border-none text-xs mr-2" size='xs' />
                Nouveau compte
              </a>
            </Link>
          </li>
          <li  className='ml-2'>
          <Link href="/">
            <a className='bg-orange-600 rounded-3xl text-xl px-5 font-medium py-2 flex text-white'>
              <FontAwesomeIcon icon={faPhone} className="hidden border-none mr-2"/>
              Contact
            </a>
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header