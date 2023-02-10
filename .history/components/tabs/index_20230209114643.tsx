import classNames from 'classnames';
import React, { useState } from 'react'

function Tabs({items}: any) {
  const [activeTab, setActiveTab] = useState("tab-0");
  const handleClick = () => {

  }
  return (
    <section className='container px-3 md:px-0 py-10'>

      <ul className='flex justtify-center items-center'>
        {items.map((item: any, index: number) => (
          <li key={`tab-${index}`} className={classNames('grow border-b-4',{ 'bg-white border-app-orange': activeTab === `tab-${index}` })}>
            <button id={`tab-${index}`} type='button' className='uppercase w-full py-2 text-2xl' onClick={handleClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs