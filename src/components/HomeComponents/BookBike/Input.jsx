import React from 'react'

function Input({ label, name, place, type }) {
   return (
      <div className='inputContainer'>
         <label htmlFor={name}>{label}</label>
         <input
            type={type} name={name} placeholder={place}
         />
      </div>
   )
}

export default Input