import React from 'react'
import './Admin.css'
import { Link, Routes, Route } from 'react-router-dom'
import CreateJob from './createJob/CreateJob'
import AdminLogin from './createAdmin/AdminLogin'
import Vacancy from './alljobs/VacancyCard'
import AllAdmins from './AllAdmins/AllAdmins'
function Admin() {
    return (
        <div className='admin'>
            <header className="admin_header">
                <Link to={"/admin"}>Dashboar</Link>
                <Link to={"/admin/create-job"}>Create Job</Link>
                <Link to={"/admin/create-admin"}>Create Admin</Link>
                <Link to={"/admin/alljobs"}>All Jobs</Link>
                <Link to={"/admin/all-admins"}>All Admins</Link>
            </header>

            <div className="admin_body">
                <Routes>
                    <Route path='/create-job' element={<CreateJob />} />
                    <Route path='/create-admin' element={<AdminLogin />} />
                    <Route path='/alljobs' element={<Vacancy />} />
                    <Route path='/all-admins' element={<AllAdmins />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin
