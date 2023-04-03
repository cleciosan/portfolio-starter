import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Olá! Sou</span>
                    <span>Clécio Batista</span>
                    <span>
                        Desenvolvedor Frontend com alto
                        nível de experiência em design e
                        desenvolvimento web, produzindo
                        Trabalho de Qualidade.
                    </span>
                </div>

                <button className="button i-button">Contrate-me</button>
                <div className='i-icons'>
                    <img src={Github} alt=""/>
                    <img src={LinkedIn} alt=""/>
                    <img src={Instagram} alt=""/>
                </div>

            </div>


            <div className="i-right">
                <div className="i-name">
                    <span>Lado Direito</span>
                </div>
            </div>
        </div>
    )
}

export default Intro