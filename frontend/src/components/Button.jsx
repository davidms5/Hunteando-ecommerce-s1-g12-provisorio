import React from 'react'
import "../css/button.css"

const Button = ({text}) => {
  return (
    <button className='button' type='submit'>{text}</button>
  )
}

export default Button