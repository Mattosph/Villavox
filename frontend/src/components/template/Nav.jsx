import './Nav.css';
import React from 'react'
import {Link} from 'react-router-dom'

export default props=> 
<aside className="menu-area">
    <nav className="menu">

        <Link to ="/">
             <i className="fa fa-home"></i> Início
        </Link>

        <Link to="/users">
             <i className="fa fa-users"></i> Usuários
        </Link>


        <Link to="/agenda">
             <i className="fa fa-calendar"></i> Agenda
        </Link>

        <Link to="/contacts">
        <i class="fa fa-phone"></i>   Contactos
         
        </Link>
        
        <Link to="/galeria">
             <i className="fa fa-music"></i> Galeria
        </Link>
    
    </nav>
</aside>