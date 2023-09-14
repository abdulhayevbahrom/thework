import React from 'react'
import './Sidebar.css'
import { BiUserPlus, BiSearch } from 'react-icons/bi'
import { AiOutlineBars } from 'react-icons/ai'
import {FiLogIn} from 'react-icons/fi'

function Sidebar() {
    return (
        <div className='sidebar'>
            <h1>Logo</h1>
            <AiOutlineBars className='sidebar_bars' />
              <div className='sidebar_serch'>
                    <BiSearch className='sidebar_serch_icon'/>
                    <input type="text" placeholder='Search' />
                </div>
            <ul>
              
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>All Countries</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>UAE</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Bahrain</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>All Countries</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>UAE</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Bahrain</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>All Countries</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>UAE</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Bahrain</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>All Countries</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Bahrain</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>All Countries</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>UAE</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Bahrain</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>All Countries</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Saudi Arabiya</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>Bahrain</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>All Countries</span>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <span>UAE</span>
                </li>

            </ul>
            <div className="sidebar_login_out">
                <h5>Login out</h5>
                <FiLogIn style={{color:"red"}} className='MdLogin'/>
            </div>
        </div>
    )
}

export default Sidebar
