import './Main.css';
import React from 'react'
import Header from './Header'

export default props=>

//o header e o main serão injetados juntamente para que o funcionamento do site funcione melhor
<React.Fragment>
    <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
</React.Fragment>
