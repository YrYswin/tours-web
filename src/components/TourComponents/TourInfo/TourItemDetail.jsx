import React from 'react'

import duration from '../../../assets/svg/findResult/duration.svg'
import group from '../../../assets/svg/findResult/group.svg'
import guide from '../../../assets/svg/findResult/guide.svg'
import language from '../../../assets/svg/findResult/language.svg'
import locaction from '../../../assets/svg/miniSvg/4.2.svg'
import ticket from '../../../assets/svg/findResult/ticket.svg'
import transportation from '../../../assets/svg/findResult/transportation.svg'

import './TourItemDetail.css'

function TourItemDetail({ data }) {
   return (
      <div className='tourItemDetail'>
         <div className="tourItemDetailContent">
            <h1>Details</h1>
            <p>{data.description}</p>
            <ul>
               <li>
                  <img src={group} alt="hehe" />
                  <p><strong>Number of Group: </strong>{data.duartionStart}</p>
               </li>
               <li>
                  <img src={duration} alt="hehe" />
                  <p><strong>Duartion: </strong>{data.duartionStart}</p>
               </li>
               <li>
                  <img src={locaction} alt="hehe" />
                  <p><strong>Departuring and arriving areas: </strong>{data.duartionStart}</p>
               </li>
               <li>
                  <img src={guide} alt="hehe" />
                  <p><strong>Guide service: </strong>{data.duartionStart}</p>
               </li>
               <li>
                  <img src={language} alt="hehe" />
                  <p><strong>Language: </strong>{data.duartionStart}</p>
               </li>
               <li>
                  <img src={ticket} alt="hehe" />
                  <p><strong>Entry Fees </strong>{data.duartionStart}</p>
               </li>
               <li>
                  <img src={transportation} alt="hehe" />
                  <p><strong>Entry Transportation </strong>{data.duartionStart}</p>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default TourItemDetail