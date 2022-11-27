import React from 'react'
import './Brand.css'
import {google, atlas, shopify, dropbox, slack} from './imports.js'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
    <div>
      <img src={google}  alt="" />
    </div>
    <div>
      <img src={slack}  alt=""/>
    </div>
    <div>
      <img src={atlas} alt=""/>
    </div>
    <div>
      <img src={dropbox} alt="" />
    </div>
    <div>
      <img src={shopify} alt="" />
    </div>
  </div>
  )
}

export default Brand
