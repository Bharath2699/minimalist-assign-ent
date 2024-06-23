import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import "./index.css"

const Section = (props) => {
  const {title}=props
  return (
    <section>
        <img  
        src='https://res.cloudinary.com/ds6o1m3db/image/upload/v1719046509/Beej-Patakha_3_1_bneglv.png'
        alt="product-img"
         className='product-img'/>
        <div className='product-details'>
            <p className='product-name'>{title}</p>
            <Popup trigger={<button type="button" className='quick-view-button'>QUICK VIEW</button>} position={'center center'} modal >
                 <div className='popup-card'>
                     <div className='pictures'>
                         <img src='https://res.cloudinary.com/ds6o1m3db/image/upload/v1719046509/Beej-Patakha_3_1_bneglv.png' alt="pics" className='popup-img'/>
                         <div className='more-pictures'>
                            <img src="https://res.cloudinary.com/ds6o1m3db/image/upload/v1719046509/Beej-Patakha_3_1_bneglv.png" alt="imgs" className='more-popup-img'/>
                            <img src="https://res.cloudinary.com/ds6o1m3db/image/upload/v1719046509/Beej-Patakha_3_1_bneglv.png" alt="imgs" className='more-popup-img'/>
                            <img src="https://res.cloudinary.com/ds6o1m3db/image/upload/v1719046509/Beej-Patakha_3_1_bneglv.png" alt="imgs" className='more-popup-img'/>
                            <img src="https://res.cloudinary.com/ds6o1m3db/image/upload/v1719046509/Beej-Patakha_3_1_bneglv.png" alt="imgs" className='more-popup-img'/>
                         </div>
                     </div>

                     <div className='contents'>
                         <div className='title-close'>
                            <h1 className='heading'>{title}</h1>
                            <>{close=>(<button type="button"><MdOutlineClose onClick={()=>close()} fill='black' size={20} /></button>)}</>
                         </div>
                         <h2>MRP:</h2>
                         <h2>Raju's Dreams/-</h2>

                         <hr className='popup-line'/>
                           
                          <div>
                            <p className='description'>
                               Product Description
                            </p>
                            <p className='desc'>The product packs on extra punch. </p>
                          </div>

                          <hr className='popup-line'/>

                          <div>
                             <p className='description'>Product Contents</p>
                             <li>10 hand cutting pieces of rassi bombs</li>
                             <li>Filled with great pain</li>
                             <li>Raju's hope</li>
                          </div>

                          <hr className='popup-line'/>

                          <div>
                          <p className='description'>Shipping Time</p>
                          <p>Before raju understands taht his dreams do not matter</p>
                          </div>

                          <button className='choose-button' type='button'>Choose Now</button>
                     </div>
                 </div>
             </Popup>
          
        </div>
    </section>
  )
}

export default Section