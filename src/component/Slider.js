import React from 'react'
import dataSlider from './DataSlider'

function Slider() {
  return (
    <div className='container-slider'>
        {dataSlider.map((obj, index)=>{
            return (
                <div> <img src={process.end.PUBLIC_URL + `/assets/img${index + 1}.jpg`} alt='H' /> </div>
            )
        })}
    </div>
  )
}

export default Slider