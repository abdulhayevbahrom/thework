import React, { useEffect, useState } from 'react'
import './VacancyCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function VacancyCard({ country }) {
    let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        axios.get(API)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(data);

    useEffect(() => {
        setFilteredData(data.filter(item => item.location === country))
    }, [country])

    let fakeImg = "https://storage.georgia.travel/images/300x350/borjom-karagauli-nature-georgia.webp"


    return (
        <div className='vacancyCard'>

            {
                filteredData.length ?
                    filteredData.map((item, index) =>
                        <div key={index} className='vacancyCard_itemm' title={item.name}  >
                            <img src={item.img ? item.img : fakeImg} alt={item.job} />
                            <p >{item.job}</p>
                            <Link to={item.id}>More Info</Link>
                        </div>
                    )
                    :
                    data.map((item, index) =>
                        <div key={index} className='vacancyCard_itemm'>
                            < img src={item.img ? item.img : fakeImg} alt={item.job} />
                            <p>{item.job}</p>
                            <Link to={item.id}>More Info</Link>
                        </div>
                    )
            }
        </div >
    )
}

export default VacancyCard
