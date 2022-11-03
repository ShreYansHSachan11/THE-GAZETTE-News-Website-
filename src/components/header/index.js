import React, { useState, useEffect } from 'react'
import '../../styles/utils.css'
import './header.css'
import { Link } from "react-router-dom"
import search from './images/search.png'
const Header = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <header className='m-auto maxwidth-1'>
      <div className="heading">
       <h1><span>THE</span> GAZETTE</h1>
      </div>
      <div className="headernavbar">
      <div className="nav-left">
         
        </div>
        
        <div className="nav-center">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/culture">CULTURE</a></li>
                <li><a href="/politics">POLITICS</a></li>
                <li><a href="/lifestyle">LIFESTYLE</a></li>
                <li><a href="/travel">TRAVEL</a></li>
                <li><a href="/health">HEALTH</a></li>
                <li><a href="/entertainment">ENTERTAINMENT</a></li>
                <li><a href="/sport">SPORT</a></li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </div>
        
        <div className="nav-right">
            <img src={search} alt="" srcSet="" />
            
           
          
            

        </div>
      </div>
  
    </header>
    
  )
}

export default Header