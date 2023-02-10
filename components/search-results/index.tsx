import {useContext, useEffect, useCallback, useState} from 'react'
import { useQuery } from '@tanstack/react-query';
import { SearchContext } from '../../context';
import { getAds } from '../../services';
import { useRouter } from 'next/router';
import AdItem from './ad-item';

function SearchResults() {
  const [ads, setAds] = useState([])
  const searchParams = useContext(SearchContext);
  const {state, update} = searchParams;
  const {isLoading, error, data} = useQuery(['ad', state], () => getAds(state), {initialData:[]});
  
  if (error) {
    
  }

  if(isLoading) {

  }
  return (
    <section className='grid md:grid-cols-3 gap-4 pb-5 container mx-auto'>
      {data.map((ad: any) => <AdItem ad={ad} key={ad.id}/>)}
    </section>
  )
}

export default SearchResults;
