import React from 'react'

import toDoService from '../../app/todoService'

export default class BrowseToDo extends React.Component {

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
        console.log(toDos);
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
                                        <th></th>
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