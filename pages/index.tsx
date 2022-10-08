import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { useState,useRef,useEffect,useCallback, useContext } from 'react';
import Cities from '../components/cities/Cities';
import Questions from '../components/questions/Questions';
import { SearchContext } from '../context/search-context-provider';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import { cn, loaderProp } from '../utils';
const Home: NextPage = () => {
  let autoComplete: any;
  const {update} = useContext(SearchContext);
  const router = useRouter();

  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const [isLoading, setLoading] = useState(true);

  const loadScript = (url: string, callback: any) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
  /*
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
  */
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };  

  const handleScriptLoad =  useCallback((updateQuery: any, autoCompleteRef: any) => {
    autoComplete = new google.maps.places.Autocomplete(autoCompleteRef.current, { types: ["(cities)"]});
    autoComplete.setFields(["address_components", "formatted_address", "geometry.location"]);
    autoComplete.addListener("place_changed", () => handlePlaceSelect(updateQuery));
  },[]);

  const handlePlaceSelect = (data: any) => {
    
    const addressObject = autoComplete.getPlace(); 
    const city = addressObject.address_components[0].short_name;
    const query = addressObject.formatted_address;
    const lat = addressObject.geometry.location.lat();
    const lng = addressObject.geometry.location.lng();
    const address = {
      street: query,
      city,
      location: {
        type: 'city',
        coordinates: [lat, lng]
      }
    }
    setQuery(query);
    if(update) {
      update({key: 'address', value: address});
    }
    router.push('search');
  }
  const goToSearch = () => {
    router.push('search');
  }
  useEffect(() => {
    handleScriptLoad(setQuery, autoCompleteRef)
  }, [handleScriptLoad]);
  return (
      <>
        <Head>
          <title>LEGANDA | Repas entre particuliers</title>
        </Head>
        <main>
          <header className="relative h-screen">
            <Image
              src="/images/food.jpeg"
              alt="Vendez vos plats près de vous"
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
            <div className="bg-gray opacity-100 header-content absolute bottom-0 top-0 left-0 right-0">
              <div className="bg-black-rgba w-full pt-5 px-10 h-screen mx-auto flex flex-col justify-between">
                <Header withSearchBar={false} />
                <div className="form">
                  <h1 className='py-6 text-5xl font-semibold text-white'>Vos plats préférés, près de vous</h1>
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="form-group basis-full md:basis-1/2 border-2 border-orange-600 flex items-center bg-white">
                        <input 
                          autoComplete='off'
                          type="text" 
                          placeholder='Sasissez votre ville' 
                          className='text-2xl rounded-none shadow-md border-none border-transparent focus:border-transparent focus:ring-0'
                          ref={autoCompleteRef}
                          onChange={event => setQuery(event.target.value)}
                          value={query}
                        />
                      </div>
                      <button type='button'
                        onClick={goToSearch}
                        className='basis-full block w-full md:basis-1/6 bg-orange-600 text-white py-3 md:px-2 shadow-md text-xl'>
                        Rechercher
                      </button>
                    </div>
                </div>
                <p className='text-white py-4 text-xl font-extralight'>
                
                </p>
              </div>
            </div>
          </header>
          <section className="categories">
            <div className="w-full px-10 py-12">
              <div className="wrapper">
              <div className="grid gap-10 md:grid-cols-3">
                <Link href='/'>
                  <a className='relative'>
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
                  </a>
                </Link>
                <Link href='/'>
                  <a className='relative'>
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
                  </a>
                </Link>
                <Link href='/'>
                  <a className='relative'>
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
                  </a>
                </Link>
             
              </div>
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
