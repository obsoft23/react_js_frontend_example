import React from 'react'
import { Article, Brand, CTA, Navbar } from './components'
import { Blog, Features,  Footer, Header, whatGPT3 } from './containers';
import  './app.css';
 
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatGPT3 />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}


export default App

//expo init DoneiwthIt