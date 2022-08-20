import React from 'react'
import "../App.css"
export default function Home() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="1000">
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src="https://source.unsplash.com/1600x600/?tech,gadgets" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1600x600/?software,programs" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src="https://source.unsplash.com/1600x600/?computer,gadgets" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div className=' div-login-signup' >
      <a href='/login'><button className='btn btn-dark login'>Log In</button></a>
      <a href='/signup'><button className='btn btn-dark signup'>Sign Up</button></a>
      </div>
      
    </div>
  )
}
