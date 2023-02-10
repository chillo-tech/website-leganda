import React from 'react'

function Tabs({items}: any) {
  return (
    <section className='container px-3 md:px-0 border border-red-100 py-10'>
      <ul className='flex'>
        {items.map((item: any, index: number) => (
          <li className={`tab-${index}`}>
            <button type='button'>{item.label}</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tabs