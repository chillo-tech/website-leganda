import classNames from 'classnames';
import React, { useState } from 'react'

function Tabs({items}: any) {
  const [activeTab, setActiveTab] = useState("tab-0");
  return (
    <section className='container px-3 md:px-0 py-10'>
      <ul className='flex  border border-red-100 justtify-center items-center'>
        {items.map((item: any, index: number) => (
          <li key={`tab-${index}`} className={classNames('grow border-b-4',{ 'bg-white border-b-': activeTab === `tab-${index}` })}>
            <button type='button' className='w-full py-2'>{item.label}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs