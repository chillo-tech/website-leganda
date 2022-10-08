import {useContext, useEffect, useCallback, useState} from 'react'
import { useQuery } from '@tanstack/react-query';
import { SearchContext } from '../../context';
import { getAds } from '../../services';
import { useRouter } from 'next/router';

function SearchResults() {
  const [ads, setAds] = useState([])
  const searchParams = useContext(SearchContext);
  const {state, update} = searchParams;
  const {isLoading, error, data} = {}; /*useQuery(
    ['ad', searchParams], 
    () => getAds(state),
    {
      initialData: [],
      
    }
  );*/

  const loadData = async () =>{
    const response = await getAds(state);
    const data = response.json();
    console.log({data});
    
  }
  useEffect( () => {
    loadData();
  }, [loadData])
  
  if (error) {
    
  }

  if(isLoading) {

  }
  return (
    <div>index</div>
  )
}

export default SearchResults;
