import React, { useState } from 'react'
import "../styles/form.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

export const Form = ({newLocation}) => {
  const [city, setCity] = useState("");
  
  const search = (e) => {
    e.preventDefault();
    console.log({city});
    if(city==="" || !city) return;
    
    newLocation(city);
  }

  return (
    <div className='container-form'>
      <form onSubmit={search}>
        <div className='input-div'>
          <input type="text" className='form-control' placeholder='Lugar' onChange={(e) => setCity (e.target.value == undefined ? "" : e.target.value)}/>
          <button type='submit'>
            <SearchOutlinedIcon />
          </button>
        </div>
      </form>
    </div>
  )
}
