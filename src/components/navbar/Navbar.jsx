import React from 'react'
import  './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; //import icons
import logo from '../../assets/logo.svg';
import  { useState } from "react";


const MenuList = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GTP3</a></p>
  <p><a href="#possiblity">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Libary</a></p>
  </>
)

const Navbar = () => {
 
  const [toggleMenu, setToogleMenu] = useState(false);

 
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo}  alt="logo"/>
        </div>
        <div className="gpt3__navbar_container">
         <MenuList />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button" >Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
        ?
        <RiCloseLine color="#fff" size={27} onclick={ ()=> setToogleMenu(false)} />
         : 
          <RiMenu3Line color="#fff" size={27} onclick={ ()=> setToogleMenu(true)} />
        }

        {toggleMenu &&
        <div className="gpt3__navbar-menu_container scale-up">
          
          <div className="gpt3__navbar-menu_container-links">
            <MenuList />
            <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign In</p>
              <button type="button" >Sign up</button>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar