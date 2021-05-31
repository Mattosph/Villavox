import './Galery.css'
import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import Main from './Main'
import ReactDOM from "react-dom";





const headerProps ={
    icon:'music',
    title: 'Galeria',
    subtitle: "Aprecie conosco, os bons momentos."
}

export default class ResponsivePlayer extends Component {
    
    render() {
        
        return(
            <Main {...headerProps}>
            <div className='player-wrapper'><label>Pianista Jeferson Mello no Interlúdio Harmonia Lyra</label>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=E7odKdnShlI'
                    width='100%'
                    height='100%'
                />
                
                </div>
            <div className='player-wrapper'><label>Bereite dich Zion e O Holy Night</label>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=RqqDL9isERM'
                    width='100%'
                    height='100%'
                />
                
                </div>
                
            
                    
            </Main>
         
                   

        )
        
    }
  
}

