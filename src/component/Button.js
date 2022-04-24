import React from 'react'
import './Slider.css'
import Next from './Icon/Next.png'
import Prev from './Icon/Previous.png'

function Button({moveSlide, direction}) {
  return (
    <button className={direction === "next" ? "btn-slide next" : "btn-slide prev"} onClick={moveSlide}> <img src={direction === 'next' ? Next : Prev} alt='next' /> </button>
  )
}

export default Button
