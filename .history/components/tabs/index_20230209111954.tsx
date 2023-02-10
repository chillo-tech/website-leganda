import React from 'react'

function Tabs({items}: any) {
  return (
    <section className='container px-3 md:px-0 py-10'>
      <ul className='flex  border border-red-100'>
        {items.map((item: any, index: number) => (
          <li key={`tab-${index}`}>
            <button type='button'>{item.label}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs