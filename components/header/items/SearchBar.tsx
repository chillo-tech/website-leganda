import React,{useContext, useState, useEffect, useCallback} from 'react'
import { SearchContext } from '../../../context/search-context-provider'
import { OPENCAGE_API_KEY, OPENCAGE_GEOCODE_API } from '../../../utils/providers';

function SearchBar() {
  const [selectedCity, setSelectedCity] = useState('');
  const searchParams = useContext(SearchContext);
  const {state:{address}, update} = searchParams;

  const updateAddress = useCallback(
    async (coordinates: any) => {
      const {coords: {latitude: lat, longitude: lng}} = coordinates;

      const data = await fetch(`${OPENCAGE_GEOCODE_API}?q=${lat}+${lng}&key=${OPENCAGE_API_KEY}`);
      const {results} = await data.json();
      const result = results[0];
    
      if (result) {
        const {components: {village}, formatted} = result;
        setSelectedCity(village.replaceAll('-', ' '));
        const address = {
          street: formatted,
          city: village,
          location: {
            type: 'city',
            coordinates: [lat, lng]
          }
        }
        if (update){
          update({key: 'address', value: address});
        }
      }
    },
    [update],
  );
  
  const fetchAds = 
  useEffect(() => {
    if(address && address.city) {
      const {city} = address;
      setSelectedCity(city.replaceAll('-', ' '));
    } else if(window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(updateAddress, console.log);
    }

  }, [address, updateAddress]);
  return (
    <div className='py-2 grid gap-4 justify-between items-center md:grid-cols-4 w-1/2'>
        <div className='border border-gray-200 text-md rounded-3xl px-5 py-2 bg-gray-200 flex justify-between items-center'>
          <input 
            autoComplete='off'
            type="text" 
            placeholder='Veuillez choisir une ville'
            value={selectedCity||''}
            className='text-md p-0 bg-gray-200 shadow-none rounded-none border-none border-transparent focus:border-transparent focus:ring-0'
            onChange={()=>null}
          />
        </div>
        <div className='col-span-3 border border-gray-200 text-md rounded-3xl px-5 py-2 bg-gray-200 flex justify-between items-center'>
          <input 
            autoComplete='off'
            type="text" 
            placeholder='Plats, courses alimentaires, boissons, etc.' 
            className='text-md p-0 bg-gray-200 shadow-none rounded-none border-none border-transparent focus:border-transparent focus:ring-0'
          />
        </div>
    </div>
  )
}

export default SearchBar