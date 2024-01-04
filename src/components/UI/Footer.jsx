import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-teal-50 p-2 font-comfortaa text-md text-center text-teal-600 w-screen'>
            Made by Pravin Gurjar
            <ul className='flex justify-evenly max-w-28 mx-auto'>
                <li><a href='https://github.com/gurjarpravin4' target='_blank'><i className="fa-brands fa-github"></i></a></li>
                <li><a href='https://www.instagram.com/naradmuni._/' target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href='https://www.linkedin.com/in/pravin-gurjar/' target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer
