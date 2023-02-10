import { EyeOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { cn, IMAGES_URL, loaderProp } from '../../../utils'

function AdItem({ad}: {ad: any}) {
  const [isLoading, setLoading] = useState(true);
  return (
    <article className='grid'>
      <Link href={`ads/${ad.id}`}>
      	<a className='grid rounded-md bg-slate-50'>
          <div className='rounded-t-md relative h-64 rounded-md'>
            <Image
              src={`data:image/png;base64,${ad.pictures[0].base64}`}
              alt={ad.title}
              layout="fill"
              unoptimized={true} 
              priority={true}
              objectFit="fill"
              loader={loaderProp}
              className={cn(
                'rounded-t-md duration-700 ease-in-out group-hover:opacity-75',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
          <div className='p-3'>
            <div className='flex justify-between items-center'>
              <h2 className='title text-blue-800 text-xl items-center'>
                {ad?.profile?.firstName} {ad?.profile?.lastName ? ad?.profile?.lastName[0] : null}.
              </h2>
              <span className='flex items-center'>
                <EyeOutlined />
                <span className='ml-1'>{ad.views ? ad.views : 0}</span>
              </span>
            </div>
            <p className='flex justify-between items-center'>
              <span>{ad.name}</span>
              <span>{ad.price} €</span>
            </p>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default AdItem