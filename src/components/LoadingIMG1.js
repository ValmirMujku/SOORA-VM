import React from 'react'
import '../css/LoadingIMG1.css'

export default function LoadingIMG1({srcimg}) {
  return (
     <div className='cnt'>
        <img className='img1' src={srcimg}></img>
     </div>
  )
}
