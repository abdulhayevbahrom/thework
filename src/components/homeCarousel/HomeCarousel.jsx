import React from 'react'
import './HomeCarousel.css'
import { LiaTelegram } from 'react-icons/lia'
import Carousel11 from '../../components/crousel11/Carousel11'


function HomeCarousel() {


    return (
        <div className='homeCarousel'>
            <div className="caouselhomeee">
                <h1>WE HAVE <span style={{ color: "orange" }}>HIRED FOR </span></h1>
                <div className="homecarouselitem">
                    <Carousel11 />
                </div>

            </div>

            <div className="find11">
                <div className="find11_item">
                    <div className="find_box">
                        <h1>DIDN'T FIND A <span style={{ color: "orange" }}>SUITABLE VACANCY?</span></h1>
                        <button className='carousel_box_btn'><LiaTelegram className='icons_carousel1' />Subscribe</button>
                    </div>
                    <div className="find_box">
                        <h2>Register in our talent pool and subscribe to our Telegram channel to receive new opportunities on your phone!</h2>
                        <button className='carousel_box_btn'><LiaTelegram className='icons_carousel1' />Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="caouselhomeee1">
                <h1>theWORK <span style={{ color: "orange" }}>CHANNEL</span></h1>
                <div className="homecarouselitem1">
                    <Carousel11 />

                </div>

            </div>

        </div>
    )

}

export default HomeCarousel

