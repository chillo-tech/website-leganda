import classNames from 'classnames';
import React, { useState } from 'react'
import SectionTitle from '../shared/SectionTitle';

function Tabs({items}: any) {
  const [activeTab, setActiveTab] = useState("tab-0");
  const handleClick = () => {

  }
  return (
    <section className='container px-3 md:px-0 py-10'>
      <SectionTitle text='Comment ça marche' />
      <ul className='flex justtify-center items-center'>
        {items.map((item: any, index: number) => (
          <li key={`tab-${index}`} className={
              classNames(
                'grow border-b-4 py-2',
                { 'bg-white border-white': activeTab === `tab-${index}` },
                { 'bg-white border-gray-100 bg-gray-100': activeTab !== `tab-${index}` }
                )
              }>
            <button id={`tab-${index}`} type='button' className='uppercase w-full py-2 text-2xl' onClick={handleClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs