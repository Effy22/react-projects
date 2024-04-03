import React from 'react'

const Header = () => {
    const company = "FrontEnd CO."
    const description = " Lorem ipsumlar.. fdsfs.."
    const navList = [
      { id: 1, name: "HOME" },
      { id: 2, name: "ABOUT US" },
      { id: 3, name: "PRODUCT" },
      { id: 4, name: "CONTACT" },
    ]
  return (
    <div className="header">
        <h1>{company}</h1>
        <nav>
          <ul>
            {navList.map((element)=><li key={element.id}>{element.name}</li>
            )}

          </ul>
        </nav>
      </div>
  )
}

export default Header
