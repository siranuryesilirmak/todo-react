import React from 'react'
import Footer from './Footer';
import FooterInfo from './FooterInfo';
import Header from './Header';
import Main from './Main';
import "./style.css"



function ToDos() {
  return (
    <div className='todoapp'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <FooterInfo></FooterInfo>

    </div>
  )
}

export default ToDos