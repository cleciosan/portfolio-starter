import React from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import clecio from '../../img/clecio.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

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
                        Desenvolvedor Frontend com alto nível 
                        de experiência em design e desenvolvimento web, 
                        produzindo Trabalho de Qualidade.
                    </span>
                </div>

                <button className="button i-button">Contrate-me</button>
                
                <div className='i-icons'>
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>

            </div>

            <div>
                <div className="i-right">
                    <img src={Vector1} alt=''/>
                    <img src={Vector2} alt=''/>
                    <img src={boy} alt=''/>
                    <div>
                        <floatingDiv></floatingDiv>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro