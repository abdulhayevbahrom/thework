import React, { useState } from 'react'
import './Edit.css'
import axios from 'axios';

function Edit({ changeble }) {
    const [job, setJob] = useState(changeble.job)
    const [employer, setEmployer] = useState(changeble.employer)
    const [location, setLocation] = useState(changeble.location)
    const [contract, setContract] = useState(changeble.contract)
    const [joiningDate, setJoiningDate] = useState(changeble.joiningDate)
    const [salary, setSalary] = useState(changeble.salary)
    const [img, setImg] = useState(changeble.img)
    const [provides, setProvides] = useState(changeble.provides)
    const [requirements, setRequirements] = useState(changeble.requirements)

    document.body.style.overflow = "hidden"
    document.title = "Edit"

    function editItemData(e) {
        e.preventDefault()
        let changedData = {
            job: job,
            employer: employer,
            location: location,
            contract: contract,
            joiningDate: joiningDate,
            salary: salary,
            img: img,
            provides: provides,
            requirements: requirements
        }
        let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";
        axios.put(API + "/" + changeble.id, changedData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='edit_page'>
            <form className="edit_form" onSubmit={editItemData}>
                <div>
                    <label>job</label>
                    <input type="text" value={job} onChange={(e) => setJob(e.target.value)} placeholder='enter job name' />
                </div>
                <div>
                    <label>job</label>
                    <input type="text" onChange={(e) => setEmployer(e.target.value)} value={changeble.employer} placeholder='decription' />
                </div>
                <div>
                    <label>job</label>
                    <input type="text" onChange={(e) => setLocation(e.target.value)} value={changeble.location} placeholder='location' />
                </div>
                <div>
                    <label>job</label>
                    <input type="text" onChange={(e) => setContract(e.target.value)} value={changeble.contract} placeholder='contract' />
                </div>
                <div>
                    <label>job</label>
                    <input type="date" onChange={(e) => setJoiningDate(e.target.value)} value={changeble.joiningDate} />
                </div>
                <div>
                    <label>job</label>
                    <input type="text" onChange={(e) => setSalary(e.target.value)} value={changeble.salary} placeholder='salary' />
                </div>
                <div>
                    <label>job</label>
                    <input type="text" onChange={(e) => setImg(e.target.value)} value={changeble.img} placeholder='img' />
                </div>
                <div>
                    <label>job</label>
                    <textarea value={changeble.provides} onChange={(e) => setProvides(e.target.value)} cols="10" rows="2" placeholder='provides'></textarea>
                </div>
                <div>
                    <label>job</label>
                    <textarea value={changeble.requirements} cols="10" rows="2" onChange={(e) => setRequirements(e.target.value)} placeholder='requirements'></textarea>
                </div>
                <input type="submit" className='editBTN' value={"Edit"} />
            </form>
        </div>
    )
}

export default Edit
