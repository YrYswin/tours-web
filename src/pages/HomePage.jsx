import React from 'react'
import SearcherTour from '../components/SearcherTour/SearcherTour'
import PopularPlace from '../components/HomeComponents/PopularPlace/PopularPlace'
import WelcomeToSite from '../components/HomeComponents/WelcomeToSite/WelcomeToSite'
import SpecialOffers from '../components/HomeComponents/SpecialOffers/SpecialOffers'
import AboutTransport from '../components/HomeComponents/AboutTransport/AboutTransport'
import BookBike from '../components/HomeComponents/BookBike/BookBike'
import PopularPackages from '../components/HomeComponents/PopularPackages/PopularPackages'
import Comments from '../components/HomeComponents/Comments/Comments'

import homeWelcome from '../assets/image/welcomeImage.png'

function HomePage() {
   return (
      <div className='container'>
         <SearcherTour />
         <PopularPlace />
         <WelcomeToSite image={homeWelcome} title='We are the best companyfor your visit' text='After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!' />
         <SpecialOffers />
         <AboutTransport />
         <BookBike />
         <PopularPackages />
         <Comments />
      </div>
   )
}

export default HomePage