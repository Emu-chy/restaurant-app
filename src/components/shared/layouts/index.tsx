import React, { ReactNode } from 'react'
import Header from '../header';
// import Footer from '../footer';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

type Props = {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <main className='font-body'>
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  )
}

export default Layout