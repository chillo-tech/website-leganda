import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { useState,useRef,useEffect } from 'react';
import Questions from '../components/questions/Questions';
import Header from '../components/header/Header';
import {cn, HEADERS_ITEMS, loaderProp, STORES} from '../utils';

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(true);
  const timeoutRef = useRef<any>();
  const [displayedItemIndex, setDisplayedItemIndex] = useState(0);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
          setDisplayedItemIndex((prevIndex) =>
              prevIndex === HEADERS_ITEMS.length - 1 ? 0 : prevIndex + 1
          ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [displayedItemIndex]);
  return (
      <>
        <Head>
          <title>{`LEGANDA | Repas entre particuliers ${HEADERS_ITEMS[displayedItemIndex]['label']}`}</title>
        </Head>
        <main>
          <header className="relative h-screen md:mb-0">
            <Image
              src={HEADERS_ITEMS[displayedItemIndex]['image']}
              alt={`Leganda ${HEADERS_ITEMS[displayedItemIndex]['label']}`}
              layout="fill"
              unoptimized={true} 
              priority={true}
              objectFit="cover"
              loader={loaderProp}
              className={cn(
                'duration-700 ease-in-out group-hover:opacity-75 hidden',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
            <div className="bg-gray opacity-200 header-content absolute bottom-0 top-0 left-0 right-0">
              <div className="bg-black-rgba w-full pt-5 px-3 md:px-10 h-screen mx-auto flex flex-col justify-between">
                <Header withSearchBar={false} />
                <div className="container">
                  <div className="text-5xl md:text-8xl font-extrabold text-white">Retrouvez</div>
                  <div className="text-5xl md:text-8xl py-4 font-extrabold text-white py-2 md:py-4 text-orange-600">{HEADERS_ITEMS[displayedItemIndex]['label']}</div>
                  <div className="text-5xl md:text-8xl font-extrabold text-white">Près de vous</div>
                  <p className="flex py-4 items-center justify-center md:justify-start">
                    {STORES.map((item: any, index: number) => (
                        <Link
                            href="#"
                            target="_blank"
                            key={`liens-${index}`} className="block items-center py-2 w-48 h-14 relative">
                          <Image
                              layout={'contain'}
                              src={`/images/${item.image}`}
                              alt={item?.label}
                          />
                         
                        </Link>
                    ))}
                  </p>
                </div>
                <p />
              </div>
            </div>
          </header>
          <section className="categories py-3 md:py-16 bg-app-light-blue">
            <div className="container">
              <div className="grid gap-10 md:grid-cols-3">
                <Link href='/' className='relative'>
                    <div className="relative home-page-article ">
                      <Image
                          src="/images/eat-food.jpeg"
                          alt="os plats préférés tout près de chez vous"
                          layout="fill"
                          objectFit="cover"
                          unoptimized={true} 
                          loader={loaderProp}
                          className={cn(
                            'duration-700 ease-in-out group-hover:opacity-75 hidden',
                            isLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black-rgba">
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 py-5 px-5 text-white">
                      <h2 className='font-bold pt-2 text-3xl md:text-4xl title shadow-2xl'>Vos plats préférés <br /> tout près de chez vous</h2>
                    </div>
                </Link>
                <Link href='/' className='relative'>
                    <div className="relative home-page-article ">
                      <Image
                          src="/images/food-on-fire.jpeg"
                          alt="Vendez vos plats de vous"
                          layout="fill"
                          objectFit="cover"
                          unoptimized={true} 
                          loader={loaderProp}
                          className={cn(
                            'duration-700 ease-in-out group-hover:opacity-75 hidden',
                            isLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black-rgba">
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 py-5 px-5 text-white">
                      <h2 className='font-bold pt-2 text-3xl md:text-4xl title shadow-2xl'>Vendez des plats <br /> au tour de vous</h2>
                    </div>
                </Link>
                <Link href='/' className='relative'>
                    <div className="relative home-page-article ">
                      <Image
                          src="/images/delivery.jpeg"
                          alt="Livrez des repas avec leganda"                          
                          layout="fill"
                          objectFit="cover"
                          unoptimized={true} 
                          loader={loaderProp}
                          className={cn(
                            'duration-700 ease-in-out group-hover:opacity-75 hidden',
                            isLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black-rgba">
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 py-5 px-5 text-white">
                      <h2 className='font-bold pt-2 text-3xl md:text-4xl title shadow-2xl'>Livrez <br /> avec LEGANDA</h2>
                    </div>
                </Link>
             
              </div>
              </div>
          </section>
          {/*<Cities />*/}
          <Questions />
        </main>
      </>
  )
}

export default Home
