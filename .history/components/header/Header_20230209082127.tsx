import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import SearchBar from './items/SearchBar'

function Header({withSearchBar = true}: {withSearchBar?: boolean}) {
  return (
    <header className="container py-4">
       <nav className='flex justify-between items-center'>
        <Link href="/" className='text-orange-600 uppercase title text-5xl'>LEGANDA
        </Link>
        {withSearchBar ? <SearchBar /> : null }
        <ul className='md:flex justify-between items-center hidden'>
          <li>
            <Link href="/" className='border border-orange-600 rounded-3xl px-5 py-2 text-orange-600 flex justify-between items-center'>
                <FontAwesomeIcon icon={faUser} className="hidden border-none text-xs mr-2" size='xs' />
                Nouveau compte
            </Link>
          </li>
          <li  className='ml-2'>
          <Link href="/" className='bg-orange-600 rounded-3xl text-xl px-5 font-medium py-2 flex text-white'>
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
