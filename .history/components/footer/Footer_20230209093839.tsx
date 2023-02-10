
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'
import { cn, STORES } from '../../utils';
import Image from 'next/image';
function Footer() {
	return (
			<footer className="bg bg-blue-900 text-white pb-10 pt-10 font-extralight flex flex-col" id="a-propos-de-nous">
				<div className="container mx-auto px-3">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:p-0 items-center">
						<div className="presentation">
              <Link href='/' className='mb-5 color-site-orange uppercase font-extrabold text-3xl'>LEGANDA
              </Link>
              <p className="flex py-4 items-center justify-center md:justify-start">
                {STORES.filter((item: any) => item.active).map((item: any, index: number) => (
                    <Link
                        href="#"
                        target="_blank"
                        key={`liens-${index}`}
                        className="block items-center py-2 w-48 h-14 relative">
                      <Image
                          fill={true}
                          src={`/images/${item.image}`}
                          alt={item?.label}
                      />
                    </Link>
                ))}
              </p>
						</div>
						<div className="presentation">
							<p className='mb-5'>CHILLO accélère la performance business et digitale des entreprises. </p>
							<p>De la stratégie opérationnelle
								à la mise en œuvre de solutions de pointe, drivées par les technologies web ou mobiles.</p>
						</div>
						<div className="presentation flex flex-col items-center justify-center">
							<div className='px-10 flex items-center justify-between text-center'>
								<FaLinkedinIn color='text-slate-300' className='px-3 text-6xl'/>
								<FaInstagram className='px-3 text-6xl'/>
								<FaFacebook className='px-3 text-6xl'/>
							</div>
							<div className='py-2'>

							</div>
						</div>
					</div>
				</div>
				<div className="copyright border-top-1 mt-2 font-light">
					<div className="container py-5 text-sm mx-auto text-center border-solid border-t border-slate-200">
						&copy; Copyright {(new Date()).getFullYear()} leganda.fr. Tous droits réservés.
					</div>
				</div>
			</footer>

	);
}

export default Footer;
