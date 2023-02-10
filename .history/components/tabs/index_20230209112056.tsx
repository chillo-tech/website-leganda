import React from 'react'

function Tabs({items}: any) {
  return (
    <section className='container px-3 md:px-0 py-10'>
      <ul className='flex  border border-red-100 justtify-center items-center'>
        {items.map((item: any, index: number) => (
          <li key={`tab-${index}`} className="border border-green-100">
            <button type='button'>{item.label}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs