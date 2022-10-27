import React from 'react'
import './LoadingAnim.css'

function LoadingAnim(){
  
  return(
      <div className='animation-container'>
        <div className='anim-ball anim1'></div>
        <div className='anim-ball anim2'></div>
        <div className='anim-ball anim3'></div>
      </div>
  )
  
}

export {LoadingAnim}