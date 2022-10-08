import Head from 'next/head'
import React from 'react'
import {Categories, Header, SearchResults} from '../../components';

function Search() {
  return (
    <>
      <Head>
        <title>LEGANDA | Retouvez vos repas préférés autor de vous | Vendez près de vous</title>
      </Head>
      <section className='px-2 pt-1'>
        <Header />
        <Categories />
        <SearchResults />
      </section>
    </>
  )
}

export default Search