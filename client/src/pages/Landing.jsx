import React from 'react'
import "../styles/Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
    <h1>HTML Scrapper</h1>
    <p>Hello and welcome!</p>
    <Link to="/login" className="landing-login-button">Login</Link>
    <Link to="/register" className="landing-register-button">Register</Link>
    <a href="https://github.com/furiousluck" target="_blank" rel="noopener noreferrer" className="landing-github-link">GitHub Profile</a>
  </div>
  )
}

export default Landing