import React from 'react'
import "../styles/Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate ();
  const HandleClick = () => {
    Navigate ("/pokemon")
  }
  return (
    <div className='Customhome'>
      <img className='customlogopoke' width="380px" src="src\assets\Title.png" alt="Logo title" />      
        <div><img className='customimghome' width="300px" src="src\assets\pikachu.gif" alt="Pikachu Gif" /></div>
        <div className='divbtn'> 
          <button className='btncus' onClick={HandleClick}>Ve a la POKEDEX usando useNavigate! :D</button>
        
        </div>
    </div>
  )
}

export default Home