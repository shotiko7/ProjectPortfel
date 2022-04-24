import React from 'react'
import DataSlider from './DataSlider'
import Button from './Button'
import './Slider.css'

function Slider() {
  return (
    <div className='container-slider'>
        {DataSlider.map((obj, index)=>{
            return (
                <div className='slider'> <img src={process.env.PUBLIC_URL + `/assets/img${index + 1}.jpg`} /> </div>
            )
        })}
        <Button />
        <Button />
    </div>
  )
}

export default Slider