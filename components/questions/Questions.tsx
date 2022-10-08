import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaMobile, FaMobileAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

function Questions() {
  return (
    <section className='py-16'>
        <div className="container grid md:grid-cols-2 justify-center items-center">
          <article>
            <h2 className='text-4xl font-semibold text-black'>
              <p className='p-0 m-0'>Vous avez une question ?</p>
              <p className='p-0 m-0'>Nous sommes là pour vous</p>
            </h2>
            <div className='py-10'>
              <p className='p-0 m-0'>Nos conseillers sont disponible sur au téléphone ou par mail.</p>
              <p className='p-0 m-0'>De 8h à 21h en semaine et de 9h à 20h le week-end.</p>
              <p className='p-0 m-0'>Pour répondre à toutes vos questions. Et en moyenne, ils répondent en moins de 10 minutes.</p>
            </div>
          </article>
          <article>
              <Link href="tel:0033761705745">
                <a className='py-3 text-lg flex items-center justify-center'>
                  <FaMobileAlt className='text-3xl text-blue-500 mr-3' /> Poser ma question au téléphone
                </a>
              </Link>
              <Link href="whatsapp:0033761705745">
                <a className='py-3 text-lg flex items-center justify-center'>
                  <FaWhatsapp className='text-3xl text-green-500 mr-3' /> Poser ma question sur whatsapp
                </a>
              </Link>
              <Link href="mailto:armelle.leganda@gmail.com">
                <a className='py-3 text-lg flex items-center justify-center'>
                  <FaEnvelope className='text-3xl text-yellow-500 mr-3' /> Poser ma question par mail
                </a>
              </Link>
          </article>
        </div>
    </section>
  )
}

export default Questions
