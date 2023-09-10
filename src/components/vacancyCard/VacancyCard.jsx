import React, { useEffect, useState } from 'react'
import './VacancyCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function VacancyCard() {
    let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(API)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='vacancyCard'>
            {
                data.map(item =>
                    <div key={item.id} className='vacancyCard_item'>
                        <img src="https://storage.georgia.travel/images/300x350/borjom-karagauli-nature-georgia.webp" alt={item.job} />
                        <p>{item.job}</p>
                        <Link to={item.id}>More Info</Link>
                    </div>
                )
            }
        </div>
    )
}

export default VacancyCard
