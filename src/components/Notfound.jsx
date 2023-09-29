import React from 'react'
import "../styles/Notfound.css"

const Notfound = () => {
  return (
    <div className='Customnot'>
        <div className='Containerimg'>
            <img className='Customnotimg' src="src\assets\notfound.png" alt="" />
        </div>
        <div className='Customtext'><h2>ESTAS PERDIDO!??</h2></div>
    </div>
  )
}

export default Notfound