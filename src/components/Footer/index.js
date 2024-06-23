import React from 'react'
import "./index.css"

const Footer = () => {
  return (
    <footer>
       <h1 className='footer-title'>
          Follow us on
       </h1>
       <div className='media-links'>
           <img alt='instagram' src='https://res.cloudinary.com/ds6o1m3db/image/upload/v1719047485/001-instagram_o3tb5l.png' className='media-img' />
           <img alt='youtube' src='https://res.cloudinary.com/ds6o1m3db/image/upload/v1719047499/002-youtube_xlets9.png' className='media-img' />
           <img alt='twitter' src='https://res.cloudinary.com/ds6o1m3db/image/upload/v1719047514/003-twitter_pav5xw.png' className='media-img' />
           <img alt='facebook' src='https://res.cloudinary.com/ds6o1m3db/image/upload/v1719047529/004-facebook_ta2glm.png' className='media-img' />
           <img alt='linkedin' src='https://res.cloudinary.com/ds6o1m3db/image/upload/v1719047544/005-linkedin_szn8dl.png' className='media-img' />
       </div>
    </footer>
  )
}

export default Footer