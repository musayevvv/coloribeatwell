import React from 'react'
import Banner from './banner/Banner'
import OutStory from './ourstory/OutStory'
import Gallery from './gallery/Gallery'
import Offer from './offer/Offer'
import News from './news/News'

const Home = () => {
  return (
    <div>
      <Banner />
      <OutStory />
      <Offer />
      <Gallery />
      <News />
    </div>
  )
}

export default Home