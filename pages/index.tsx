import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { useState,useRef,useEffect,useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'
import Cities from '../components/cities/Cities';
import Questions from '../components/questions/Questions';
const Home: NextPage = () => {
  let autoComplete;
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const [isLoading, setLoading] = useState(true);
  const loaderProp =({ src }: {src: string}) => {
    return src;
  }
  const cn = (...classes: string[]) =>{
    return classes.filter(Boolean).join(' ')
  }
  const loadScript = (url: string, callback: any) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
  
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
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };  

  const handleScriptLoad =  useCallback((updateQuery: any, autoCompleteRef: any) => {
    autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, { types: ["(cities)"]});
    autoComplete.setFields(["address_components", "formatted_address", "geometry.location"]);
    autoComplete.addListener("place_changed", () => handlePlaceSelect(updateQuery));
  },[]);

  const handlePlaceSelect = (data: any) => {
    const addressObject = autoComplete.getPlace(); // get place from google api
    const query = addressObject.formatted_address;
    const lat = addressObject.geometry.location.lat();
    const lng = addressObject.geometry.location.lng();
    setQuery(query);
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
              <div className="bg-black-rgba w-full px-10 h-screen mx-auto flex flex-col justify-between">
                <nav className='py-10 flex justify-between items-center'>
                  <Link href="/">
                    <a className='text-orange-600 uppercase title text-5xl'>LEGANDA</a>
                  </Link>
                  <ul className='md:flex justify-between items-center hidden'>
                    <li>
                      <Link href="/">
                        <a className='border border-orange-600 rounded-3xl px-5 py-2 text-orange-600 flex justify-between items-center'>
                          <FontAwesomeIcon icon={faUser} className="border-none text-xs mr-2" size='xs' />
                          Nouveau compte
                        </a>
                      </Link>
                    </li>
                    <li  className='ml-2'>
                    <Link href="/">
                      <a className='bg-orange-600 rounded-3xl text-xl px-5 font-medium py-2 flex text-white'>
                        <FontAwesomeIcon icon={faPhone} className="border-none mr-2"/>
                        Contact
                      </a>
                    </Link>
                    </li>
                  </ul>
                </nav>
                <div className="form">
                  <h1 className='py-6 text-5xl font-semibold text-white'>Vos plats préférés, près de vous</h1>
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="form-group basis-full md:basis-1/2 border-2 border-orange-600 flex items-center bg-white">
                        <input 
                          autoComplete='off'
                          type="text" 
                          placeholder='Sasissez votre adresse' 
                          className='text-2xl rounded-none shadow-md border-none border-transparent focus:border-transparent focus:ring-0'
                          ref={autoCompleteRef}
                          onChange={event => setQuery(event.target.value)}
                          value={query}
                        />
                      </div>
                      <button className='basis-full block w-full md:basis-1/6 bg-orange-600 text-white py-3 md:px-2 shadow-md text-xl'>
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
          <Cities />
          <Questions />
        </main>
      </>
  )
}

export default Home
