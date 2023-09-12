import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './Vacancy.css'
import VacancyCard from '../../components/vacancyCard/VacancyCard'

function Vacancy() {
    return (
        <div className='vacancy'>
            <Sidebar />
            <VacancyCard />
        </div>
    )
}

export default Vacancy
