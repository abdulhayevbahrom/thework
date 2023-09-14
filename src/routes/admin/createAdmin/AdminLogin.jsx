import React from 'react'
import './AdminLogin.css'
import { BiSolidKey } from 'react-icons/bi'
import { FaUserAlt, FaLock, FaUser } from 'react-icons/fa'
import { BsQuestionLg } from 'react-icons/bs'
import { MdEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import { AiFillEyeInvisible } from 'react-icons/ai'

function AdminLogin() {
    const mystyle = {
        color: 'white'
    }
    return (
        <div className='AdminLogin'>
            <div className="containerAdmin">
                <div className="boxAdmin">
                    <div className="coverAdmin"></div>
                    <div className="shadovAdmin"></div>
                    <div className="contentAdmin">
                        <div className="formAdmin">
                            <h3 className='logo' style={mystyle}><BiSolidKey /></h3>
                            <h2>sign in</h2>
                            <div className="inputBox">
                                <input type="text" required />
                                <FaUserAlt className='i' />
                                <span>username</span>
                            </div>
                            <div className="inputBox">
                                <input type="email" required />
                                <MdEmail className='i' />
                                <span>email</span>
                            </div>
                            <div className="inputBox">
                                <input type="password" required />
                                <FaLock className='i' />
                                <AiFillEyeInvisible className='i' id='eye' />
                                <span>password</span>
                            </div>
                            <div className="inputBox">
                                <input type="password" required />
                                <FaLock className='i' />
                                <AiFillEyeInvisible className='i' id='eye' />
                                <span>confirm password</span>
                            </div>
                            <div className="inputBox">
                                <input type="tex" required />
                                <MdDriveFileRenameOutline className='i' />
                                <span>name</span>
                            </div>
                            <div className="inputBox">
                                <input type="tex" required />
                                <MdDriveFileRenameOutline className='i' />

                                <span>familiya</span>
                            </div>
                            <div className="linksAdmin">
                                <a href="#"> <BsQuestionLg className='i' />forgot password</a>
                                <a href=""> <FaUser className='i' /> sign in</a>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value={"sign up"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
