import React from 'react'
import Logo from  '../assets/image/logo_black.png'
import {AiFillYoutube,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <section className="footer-section">
        <footer className="footer">
            <div className="footer-left">
                <img src={Logo} alt="Company Logo" />
            </div>
            <div className='footer-right' >
                <ul className="social-links">
                    <a href="https://youtube.com" target={'blank'}><AiFillYoutube /> </a>
                    <a href='https://www.linkedin.com/in/sanket-jagtap-b03238312/' target={'blank'}><AiFillLinkedin/> </a>
                    <a href='https://www.github.com/ItzSanket99' target={'blank'}><AiFillGithub/> </a>
                </ul>
            </div>
        </footer>
    </section>
  )
}

export default Footer