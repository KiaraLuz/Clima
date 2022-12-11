import React from 'react'
import "../styles/notFound.css"

export const NotFound = () => {
  return (
    <div className='container-notfound'>
      <div className='not-found'>
        <h3>Dirección no encontrada</h3>
        <img className="arbol" src='https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=2000' alt="..." />
      </div>
    </div>
  )
}
