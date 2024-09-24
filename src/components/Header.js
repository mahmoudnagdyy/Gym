import '../css/header.css';
import Image from './Image.js';

import logo from '../imgs/logo.png';

import { PiListBold } from "react-icons/pi";
import { useState } from 'react';
import { GrClose } from "react-icons/gr";

function Header() {

    const [x, setX] = useState(false);

    const [bg, setBg] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setBg(true);
        }
        else {
            setBg(false);
        }
    })

    return (
        <header className={bg ? 'bg w-full h-24 flex flex-row items-center justify-around z-10 duration-300' : 'bg-transparent w-full h-24 flex flex-row items-center justify-around z-10 duration-300'}>
            <Image className='w-32 h-16' src={logo} alt='Logo' />

            <div className='list-container'>
                <button className='list-icon ' onClick={() => setX(true)}><PiListBold /></button>
                <div className={x ? 'links-list flex flex-row z-10 active' : 'links-list flex flex-row z-10'}>
                    <button className='close-icon hover:text-red-500 duration-200' onClick={() => setX(false)}><GrClose /></button>
                    <a className='text-white capitalize p-4 mr-10 font-bold hover:text-red-500 duration-200' href='#'>home</a>
                    <a className='text-white capitalize p-4 mr-10 font-bold hover:text-red-500 duration-200' href='#features'>features</a>
                    <a className='text-white capitalize p-4 mr-10 font-bold hover:text-red-500 duration-200' href='#offer'>offer</a>
                    <a className='text-white capitalize p-4 mr-10 font-bold hover:text-red-500 duration-200' href='#about'>about</a>
                    <a className='text-white capitalize p-4 mr-10 font-bold hover:text-red-500 duration-200' href='#contact'>contact</a>
                </div>
            </div>

            <div className='header-links flex flex-row'>
                <a className='text-white capitalize mr-10 font-bold hover:text-red-500 duration-200' href='#'>home</a>
                <a className='text-white capitalize mr-10 font-bold hover:text-red-500 duration-200' href='#features'>features</a>
                <a className='text-white capitalize mr-10 font-bold hover:text-red-500 duration-200' href='#offer'>offer</a>
                <a className='text-white capitalize mr-10 font-bold hover:text-red-500 duration-200' href='#about'>about</a>
                <a className='text-white capitalize mr-10 font-bold hover:text-red-500 duration-200' href='#contact'>contact</a>
            </div>
        </header >
    );
}

export default Header;