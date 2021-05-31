import React from 'react'
import './Home.css'
import Main from '../template/Main'
import LogoHeader from '../template/LogoHeader';

export default props =>

<React.Fragment>
    <Main icon='home' title="Início"
        subtitle="Projeto Villa Vox">
        <div className='display-4'>Bem Vindo a Villa Vox!</div>
        
     <LogoHeader/>   
        
        <hr />
        <p className="mb-0">
            <li> Escola especializada no ensino da música.</li>
            <li>Cursos de alta formação.</li>
            <li>Os melhores professores na melhor escola de música de XXXXX .</li>
        </p>
    </Main>
    </React.Fragment>