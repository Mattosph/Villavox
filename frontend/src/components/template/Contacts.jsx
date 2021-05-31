import React, {Component} from 'react'
import './Contacts.css'
import Main from './Main'



const headerProps ={
    icon:'phone',
    title: 'Contactos',
    subtitle: "Aqui podes encontrar as informações para contactar a nossa empresa."
}

 

    export default class Contacts extends Component {
        

        render() {
        
        return(
            <Main {...headerProps}>
            
            <li>Telemóvel:+351 </li>
            <li>Correio Eléctronico:</li>
            <li>Endereço Comercial:</li>
                   
            </Main>
                   

        )
        
    }
  
    }

    