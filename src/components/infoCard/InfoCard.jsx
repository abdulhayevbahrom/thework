import React from 'react'
import './Infocard.css'
import { FaSearch } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import { MdLaptop } from 'react-icons/md';
import { FaClipboardCheck } from 'react-icons/fa';

import findvacancy from './image_2023-09-07_11-15-47.png'
import interview from './image_2023-09-07_11-15-57.png'
import employer from './image_2023-09-07_11-15-26.png'
import newjob from './image_2023-09-07_11-15-34.png'

function InfoCard() {
  return (
    <div className='getjob'>
      <h1>HOW TO <span> GET A JOB </span>
      </h1>
      <div className="fullgetjobcards">
        <div className="getjob_cards">
          <FaSearch/>
          <b>1. Finding a vacancy</b>
          <p>Check available opportunities and news then you can apply or travel <a href="/">here</a></p>
        </div>
        <div className="getjob_cards">
          <FaDesktop/>
          <b>2. Interview with us</b>
          <p>You should complete a pre-screening interview with our management. </p>
        </div>
        <div className="getjob_cards">
          <MdLaptop/>
          <b>3. Interview with employer</b>
          <p>Impress your future employer during an online meeting and get a Job Offer</p>
        </div>
        <div className="getjob_cards">
          <FaClipboardCheck/>
          <b>4. Starting new job!</b>
          <p>Prepare necessary documents, receive a visa and get ready to travel</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
