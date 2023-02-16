import React from 'react';
import logo1 from '../images/logo1.png'
import contactlogo from '../images/contact-icon.png'
import '../css/NavMen.css'

export default function NavMen() {
  return (
    <>
    <div className='container'>
        <div className='div1'>
        <img className='logo1' src={logo1}></img>
        </div>
        <div className='div2'>
        <button className='btn'>Contact Us <img className='contlg' src={contactlogo}></img></button>
        </div>
    </div>
   
    
    </>
  )
}
