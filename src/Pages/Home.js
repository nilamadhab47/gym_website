import React, { useState } from 'react'
import HeroBanner from '../component/HeroBanner'
import SearchExercise from '../component/SearchExercise'
import "../App.css"
import Features from '../component/Features'
import Reasons from '../component/Reasons'
import Pricing from '../component/Pricing'
import Stories from '../component/Stories'

const Home = () => {

  return (
    <div className="header">
      <HeroBanner />
      <Features/>
      <Reasons/>
      <Pricing/>
      <Stories/>
      
    </div>
  )
}

export default Home