import React from 'react'
import toDoService from '../../app/todoService'

import { withRouter } from 'react-router-dom'

class BrowseToDo extends React.Component {

    state = {
        toDos: []
    }

    constructor() {
        super()
        this.service = new toDoService()
    }

    componentWillMount() {
        const toDos = this.service.getToDos();
        this.setState({toDos})
        // console.log(toDos);
    }

    prepEdit = (id) => {
        this.props.history.push(`/add-todo/${id}`)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta de ToDo's
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Data</th>
                            <th>Lembrete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.toDos.map((todo, index) =>{
                                return (
                                    <tr key={index}>
                                        <th>{todo.name}</th>
                                        <th>{todo.description}</th>
                                        <th>{todo.date}</th>
                                        <th>{todo.reminder}</th>
                                        <th>
                                            <button onClick={ () => this.prepEdit(todo.id) } className="btn btn-primary">Editar &nbsp;</button>
                                            <button onClick={ () => this.prepEdit(todo.id) } className="btn btn-danger">Apagar</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}

export default withRouter(BrowseToDo)