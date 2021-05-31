import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from './components/home/Home'
import UserCrud from './components/user/UserCrud'
import Contacts from './components/template/Contacts'
import Agenda from './components/agenda/Agenda'
import Galery from './components/template/Galery'

export default props=>
<Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={UserCrud} />
    <Route path='/contacts' component={Contacts} />
    <Route path='/agenda' component={Agenda} />
    <Route path='/galeria' component={Galery} />
    <Redirect from="*" to='/' />
</Switch>