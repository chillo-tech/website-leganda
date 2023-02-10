import classNames from 'classnames';
import React, { useState } from 'react'
import RenderHtmlContent from '../shared/RenderHtmlContent';
import SectionTitle from '../shared/SectionTitle';

function Tabs({items}: any) {
  const [activeTab, setActiveTab] = useState("tab-0");
  const handleClick = ({target: {id}}: any) => {
    setActiveTab(id);
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
            <button id={`tab-${index}`} type='button' className='uppercase w-full py-2 text-lg md:text-2xl' onClick={handleClick}>{item.label}</button>
          </li>
        ))}
      </ul>
      {items.map((item: any, index: number) => (
          <section key={`tab-${index}`} className={
              classNames(
                'py-2 px-10',
                { 'bg-white border-white block': activeTab === `tab-${index}` },
                { 'hidden': activeTab !== `tab-${index}` }
                )
              }>
             {item.infos.map((info: any, index: number) => (
              <article key={`info-${index}`} className={classNames('grow py-2')}>
                <h3 className='pb-10 font-bold text-2xl'>{info.title}</h3>
                <RenderHtmlContent content={info.description} classes="text-lg"/>
              </article>
            ))}
          </section>
        ))}
    </section>
  )
}

export default Tabs