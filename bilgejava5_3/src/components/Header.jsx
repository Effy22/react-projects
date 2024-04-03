import React from 'react'

const Header = ({fullName, profilePic, proffession, profileUrl}) => {
    console.log(fullName)
  
  return (
    <div className='header'>
      <img src={profilePic} alt="" />
      <p>{fullName}</p>
      <p>{proffession}</p>
      <p>{profileUrl}</p>
    </div>
  )
}

export default Header
