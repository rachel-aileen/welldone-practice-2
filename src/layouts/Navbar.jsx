
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Close, DragHandle } from '@mui/icons-material';


export default function Navbar() {

    // State to manage menu visibility 

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

    return (
        <div className='navbar'>

            <a href="#">
                <h1 className='logo'>Welldone</h1>
            </a>


            <div className='navigation'>
                <ul className={`menu ${isMenuVisible ? 'active' : 'hidden'}`}>
                    <li className='menu-item'><a href="#home" >Home</a></li>
                    <li className='menu-item'><a href="#home">Portfolio</a></li>
                    <li className='menu-item'><a href="#home">Services</a></li>
                    <li className='menu-item'><a href="#home">About</a></li>
                    <li className="menu-item"><a href="pricing" className="active">Pricing</a></li>
                    <li className='menu-item'><a href="#home">Contact</a></li>
                </ul>

                <IconButton onClick={toggleMenu} className='menuBtn'>

                    {!isMenuVisible &&
                        <DragHandle className='menuIcon' />
                    }

                    {isMenuVisible &&
                        <Close className='menuIcon' />
                    }




                </IconButton>


            </div>

        </div >
    )
}
