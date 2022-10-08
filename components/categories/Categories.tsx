import {useState} from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../services';
import Image from 'next/image'
import { IMAGES_URL,CATEGORY_BGCOLORS, loaderProp, cn } from '../../utils';

function Categories() {
  const {data = [], error} = useQuery(['address'], getCategory);
  const [isLoading, setLoading] = useState(true);
  return (
    <section className={`grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 md:h-36 my-5`}>
      { data.length ? (data.map((category: any, key: number) => (
         <button type='button' className='p-4 rounded-md grid grid-cols-3 md:gap-2 justify-between items-center' style={{ backgroundColor: CATEGORY_BGCOLORS[key]}} key={category.id}>
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
          <h2 className='title text-xl md:text-3xl col-span-2'>{category.name}{data.length }</h2>

      </button>
      ))): null}
    </section>
  )
}

export default Categories
