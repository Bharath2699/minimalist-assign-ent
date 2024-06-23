import React from 'react'
import Header from "../Header"
import Section from "../Section"
import "./index.css"

const Main = () => {
  return (
    <main>
         <div className='banner-section'>
            <Header/>
            <div className='banner-content'>
               <h1 className='banner-heading'>The choice is yours.<br/>Because they don't have one.</h1>
               <button className='banner-button'>Quick View</button>
            </div>
         </div>

         <div className='about-title-section'>
            <hr className='line'/>
            <h1 className='about'>About</h1>
            <hr className='line'/>
         </div>

         <p className='about-content'>
               Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their <br/> chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can <br/>be heard louder than their cries for miles. Buy them, burst them, brag about them.
               The choice is yours. Because they don’t have one.<br/>
               <span>The choice is yours. Because they don’t have one</span>
         </p>

         <div className='about-title-section'>
            <hr className='line'/>
            <h1 className='about'>Our products</h1>
            <hr className='line'/>
         </div>

         <div className='products-field'>
            <Section title={"Raju Rassibomb"} />
            <Section title={"Ladiyon ki Rani Chani"} />
         </div>

         <hr className='full-line'/>
    </main>
  )
}

export default Main