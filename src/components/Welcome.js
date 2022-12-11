import React from 'react'
import "../styles/welcome.css"

export const Welcome = () => {
  return (
    <div className='container-welcome'>
      <div className='content'>
        <div class="arrow">
          <div class="curve"></div>
          <div class="point"></div>
        </div>
      </div>
      <h4>Ingrese el nombre del país o ciudad</h4>
    </div>
  )
}
