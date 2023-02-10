import {useState} from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../services';
import Image from 'next/image'
import { IMAGES_URL,CATEGORY_BGCOLORS, loaderProp, cn } from '../../utils';

function Categories() {
  const {data = [], error} = useQuery(['address'], getCategory);
  const [isLoading, setLoading] = useState(true);
  return (
    <section className={`container mx-auto grid pb-8 mb-8 grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 md:h-32 my-5 md:border-b md:border-gray-200`}>
      { data.length ? (data.map((category: any, key: number) => (
         <button type='button' className='p-4 rounded-md grid grid-cols-4 md:gap-2 justify-between items-center' style={{ backgroundColor: CATEGORY_BGCOLORS[key]}} key={category.id}>
          <div className='relative h-full'>
            <Image
                src={`${IMAGES_URL}/${category.icon}`}
                alt={category.description}
                layout="fill"
                unoptimized={true} 
                priority={true}
                objectFit="fill"
                loader={loaderProp}
                className={cn(
                  'duration-700 ease-in-out group-hover:opacity-75',
                  isLoading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
              />
          </div>
          <h2 className='title text-xl md:text-xl col-span-3'>{category.name}</h2>

      </button>
      ))): null}
    </section>
  )
}

export default Categories
