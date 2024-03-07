import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Comments from '../components/HomeComponents/Comments/Comments'
import TourItem from '../components/TourComponents/TourInfo/TourItem'
import TourItemDetail from '../components/TourComponents/TourInfo/TourItemDetail'
import TourItemGalleries from '../components/TourComponents/TourInfo/TourItemGalleries'

import backIcon from '../assets/svg/buttonBackIcon.svg'

import tours from '../data/toursData'

function TourInfo() {
   const { id } = useParams()
   const findProduct = tours.find((x) => x.id === parseInt(id))

   return (
      <div className='tourInfoPage'>
         <div className="tourInfoPageContainer">
            <Link to='/tour'> <img src={backIcon} alt="backIcon" />Back</Link>
         </div>
         <div>
            <TourItem data={findProduct} />
            <TourItemDetail data={findProduct} />
            <TourItemGalleries data={findProduct} />
            <Comments />
         </div>
      </div>
   )
}

export default TourInfo