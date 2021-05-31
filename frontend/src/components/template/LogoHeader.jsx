import './LogoHeader.css';
import logoHeader from '../../assets/imgs/logoHeader.jpg'
import React from 'react'

export default props=> 
<h1 className="LogoHeader">
    <a href="/" className="LogoHeader">
        <img src={logoHeader} alt=" Header logo"/>
    </a>
</h1>