import React from 'react'
import './Sidebar.css'
import { FaGlobe } from 'react-icons/fa'

function Sidebar() {
    return (
        <div className='sidebar'>
            <h1>Logo</h1>
            <ul>
                <li>
                    <FaGlobe className='svg' />
                    <span>All Countries</span>
                </li>
                <li>
                    <FaGlobe className='svg' />
                    <span>UAE</span>
                </li>
                <li>
                    <FaGlobe className='svg' />
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <FaGlobe className='svg' />
                    <span>Bahrain</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
