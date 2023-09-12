import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Logo</h1>
            <Link to={'/vacancy'}>Open vacancies</Link>
        </header>
    )
}

export default Header
