import React from 'react'
import { Header } from '../components';
type Props = {
  children: JSX.Element,
};
function Layout({children}: Props) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}

export default Layout
