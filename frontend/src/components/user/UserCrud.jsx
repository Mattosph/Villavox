import React, {Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps ={
    icon:'users',
    title: 'Usuários',
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: "", email: ""},
    list:[]
}

export default class UserCrud extends Component {

state={...initialState}

componentWillMount(){
    axios(baseUrl).then(resp =>{
        this.setState({ list: resp.data})
    })
}

clear(){
    this.setState({user: initialState.user})
    //Quando clicar em cancelar limpa o usuário em initialState
    //As mudanças em um registro sempre são feitas através do método setState!!
}

save(){//Cria e inclui alterações em usuário existente

    const user = this.state.user
    const method = user.id ? 'put' : "post" //se o id for existente, ou seja dif de 0 (verdadeiro)
    //realiza um put (altera na db) senão ele (inclui na db) atravé do post
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
        .then(resp =>{
            const list = this.getUpdatedList(resp.data)
            this.setState({user: initialState.user , list })
        })
}

updateField(event) {
    const user = {...this.state.user}// Para atualizar é necessário clonar o registro com o spread...
    user[event.target.name] = event.target.value // localiza o campo name para atualiza-lo
    this.setState({user})

}

getUpdatedList(user, add=true) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if(user) list.unshift(user)
    return list
}

renderForm() {
    return(
        <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control"
                        name="name"
                        value={this.state.user.name}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o nome..." />
                    </div>

                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input type="text" className="form-control"
                        name="email"
                        value={this.state.user.email}
                        onChange={e=> this.updateField(e)}
                        placeholder="Digite o e-mail..." />


                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary" 
                    onClick={e => this.save(e)}>
                        Salvar
                    </button>
                    <button className="btn btn-secondary ml-2"
                    onClick={e => this.save(e)}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

load(user){
    this.setState({user})
}

remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
        const list = this.getUpdatedList(user, false)
        this.setState({list})
    })
}

renderTable() {
    return(
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>

                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>
    )
}

renderRows() {
    return this.state.list.map(user => {
        return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-warning m-1'
                     onClick={() => this.load(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className='btn btn-danger m-1'
                     onClick={() => this.remove(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}

    render(){
        console.log(this.state.list)
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>

        )
    }
}