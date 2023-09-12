import React, { useEffect, useState } from 'react'
import './VacancyCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'

function VacancyCard() {
    let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(API)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    let fakeImg = "https://storage.georgia.travel/images/300x350/borjom-karagauli-nature-georgia.webp"

    // -------------------------------------

    function deleteItem(id) {
        let state = window.confirm("ushbu malumotni o'chirmoqchimsiz?")
        if (state) {
            axios.delete(API + "/" + id)
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        alert("successfully")
                        window.location.reload()
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='vacancyCard'>
            {
                data.map((item, index) =>
                    <div key={index} className='vacancyCard_item'>
                        <img src={item.img ? item.img : fakeImg} alt={item.job} />
                        <p>{item.job}</p>
                        <Link to={item.id}>More Info</Link>
                        <FaTrash className='trash' onClick={() => { deleteItem(item.id) }} />
                    </div>
                )
            }
        </div>
    )
}

export default VacancyCard
