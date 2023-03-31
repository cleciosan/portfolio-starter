import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Clécio</div>
                <span>toggle</span>
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Principal</li>
                        <li>Serviços</li>
                        <li>Experiência</li>
                        <li>Portfolio</li>
                        <li>Depoimentos</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contate-nos!
                </button>
            </div>
        </div>
    )
}

export default Navbar
