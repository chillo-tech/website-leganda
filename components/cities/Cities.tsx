import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getAddress} from '../../services'
import Map from '../map/Map';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Marker from '../map/Marker';
const render = (status: Status) => {
  return <h1 className='flex'>{status}</h1>;
};

const Cities = () => {
  const {data, error} = useQuery(['address'], getAddress )
  const cityFromAddress = (address: string): string => {
      const parts = address.split(' ');
      let city = parts[parts.length - 2];
      return city.trim().replaceAll(',', '');
  }

  const getCitiesFromAddress = () => {
    return data.map(({street}:{street:string}) => cityFromAddress(street));
  }
  return (
    <>
   {data ? (
    <section className='bg-orange-100 grid grid-cols-1 md:grid-cols-2'>
      <div className="w-100 flex">
        <Wrapper apiKey='AIzaSyBoBBvzxlRlkbfYzZcHp8ALOwBk3YjfB-I' render={render}>
          <Map> 
            {
              data.map(({location}: any, key: string) => (
                <Marker position={{lat: location.coordinates[1], lng: location.coordinates[0]}} key={key} />
              ))
            }
          </Map>
        </Wrapper>
      </div>
      <div className="w-full px-10 mx-auto py-20 md:py-40">
        <h2 className='flex justify-between items-center mb-10'>
          <span className='text-4xl font-semibold text-black'>Villes à proximité</span>
        </h2>
        <div className="cities grid grid-cols-2 gap-6 text-xl">
          {[...new Set(getCitiesFromAddress(data))].map((city: string, key: string) => (
              <p key={key}>{city}</p>
            ))}
        </div>
      </div>
    </section>) : null}
   </>
  )  
}


export default Cities;
