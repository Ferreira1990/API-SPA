import React from 'react'
import '../styles/Navbarx.css'
import { Link, NavLink } from 'react-router-dom'

const Navbarx = () => {
  return (
    <div className='Customnav'>
        <div className='Customlogo'>
            <img className='Customgengar' src="src\assets\logo.png" alt="" />                        
        </div>
        <div className='Customlinks'>
            <ul>
              <NavLink
              className={ ({isActive}) => (isActive? "selectActivo linkcustomx": undefined)}
              to={"/"} >
                <p>home</p>
                </NavLink>
              <NavLink
              className={ ({isActive}) => (isActive? "selectActivo linkrouter": undefined)}
              to="/pokemon" >Pokemon's</NavLink>               
              
            </ul>            
        </div>
    </div>
  )
}

export default Navbarx;