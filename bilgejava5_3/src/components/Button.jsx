import React from 'react'

const Button = ({bgColor, color, text, url}) => {
  return (
    <div style={{backgroundColor: bgColor}} className='button'>
        <a style={{color: color}} href={url} target='_blank'>{text}</a>
      
    </div>
  )
}

export default Button
