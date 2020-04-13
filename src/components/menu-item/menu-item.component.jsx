import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, image}) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className='menu-item'>
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    )
}

export default MenuItem
