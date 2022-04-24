import React, { useState } from 'react'
import DataSlider from './DataSlider'
import Button from './Button'
import './Slider.css'

function Slider() {
    const [slide, setSlide]=useState(1)
    const nextSlide =()=>{
        if(slide !== DataSlider.length){
            setSlide(slide + 1)
        }
        else if (slide === DataSlider.length){
            setSlide(1)
        }
    }
    const prevSlide =()=>{
        if(slide !==1 ){
            setSlide(slide - 1)
        }
        else if (slide === 1){
            setSlide(DataSlider.length)
        }
    }
  return (
    <div className='container-slider'>
        {DataSlider.map((obj, index)=>{
            return (
                <div key={obj.id} className={slide === index + 1 ? 'slide active-anim' : 'slider'}> <img src={process.env.PUBLIC_URL + `/assets/img${index + 1}.jpg`} /> </div>
            )
        })}
        <Button moveSlide={nextSlide} direction='next' />
        <Button moveSlide={prevSlide} direction='prev'/>
    </div>
  )
}

export default Slider