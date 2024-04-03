import React from 'react'

const Info = ({about, interests}) => {
  return (
    <div className="info-section">
    <h3>About</h3>
    <p>{about}</p>
    <h3>Interests</h3>
    <p>{interests}</p>
  </div>
  )
}

export default Info
