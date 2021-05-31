import React, {Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps ={
    icon:'calendar',
    title: 'Agenda',
    subtitle: "Consulte aqui nossa agenda de eventos"
}

const baseUrl = 'http://localhost:4001/agenda'
const initialState = {
    agenda: { name: "", local: "", date:""},
    list:[]
}

export default class Agenda extends Component {

state={...initialState}

componentWillMount(){
    axios(baseUrl).then(resp =>{
        this.setState({ list: resp.data})
    })
}

clear(){
    this.setState({agenda: initialState.agenda})
    //Quando clicar em cancelar limpa o usuário em initialState
    //As mudanças em um registro sempre são feitas através do método setState!!
}

save(){//Cria e inclui alterações em usuário existente

    const agenda = this.state.agenda
    const method = agenda.id ? 'put' : "post" //se o id for existente, ou seja dif de 0 (verdadeiro)
    //realiza um put (altera na db) senão ele (inclui na db) atravé do post
    const url = agenda.id ? `${baseUrl}/${agenda.id}` : baseUrl
    axios[method](url, agenda)
        .then(resp =>{
            const list = this.getUpdatedList(resp.data)
            this.setState({agenda: initialState.agenda , list })
        })
}

updateField(event) {
    const agenda = {...this.state.agenda}// Para atualizar é necessário clonar o registro com o spread...
    agenda[event.target.name] = event.target.value // localiza o campo name para atualiza-lo
    this.setState({agenda})

}

getUpdatedList(agenda, add=true) {
    const list = this.state.list.filter(ag => ag.id !== agenda.id)
    if(agenda) list.unshift(agenda)
    return list
}

renderForm() {
    return(
        <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Evento</label>
                        <input type="text" className="form-control"
                        name="name"
                        value={this.state.agenda.name}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o nome do evento:" />
                    </div>

                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>local:</label>
                        <input type="text" className="form-control"
                        name="local"
                        value={this.state.agenda.local}
                        onChange={e=> this.updateField(e)}
                        placeholder="Digite o local do evento:" />


                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>data:</label>
                        <input type="text" className="form-control"
                        name="data"
                        value={this.state.agenda.date}
                        onChange={e=> this.updateField(e)}
                        placeholder="Digite o local do evento:" />


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

load(agenda){
    this.setState({agenda})
}

remove(agenda) {
    axios.delete(`${baseUrl}/${agenda.id}`).then(resp =>{
        const list = this.getUpdatedList(agenda, false)
        this.setState({list})
    })
}

renderTable() {
    return(
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Evento</th>
                    <th>Local</th>
                    <th>Data</th>
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
    return this.state.list.map(agenda => {
        return(
            <tr key={agenda.id}>
                <td>{agenda.id}</td>
                <td>{agenda.name}</td>
                <td>{agenda.local}</td>
                <td>{agenda.date}</td>
                <td>
                    <button className='btn btn-warning m-1'
                     onClick={() => this.load(agenda)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className='btn btn-danger m-1'
                     onClick={() => this.remove(agenda)}>
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