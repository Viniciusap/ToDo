import React from 'react'
import DateTimePicker from 'react-datetime-picker';

import toDoService from '../../app/todoService'

const initialState = {
    name: '',
    description: '',
    date: new Date(),
    reminder: new Date(),
}

export default class AddTodo extends React.Component {
    state = initialState

    constructor() {
        super()
        this.service = new toDoService();
    }

    onChange = (e) => {
        const value = e.target.value
        const nameField = e.target.name

        this.setState({
            [nameField]: value
        })
    }

    onChageDate = (date) => {
        this.setState({ date })
    }
    onChageDates = (date) => {
        const value = new Date(date)
        this.setState({
            reminder: value
        })
    }

    OnSubmit = (e) => {
        const toDo = {
            name: this.state.name,
            description: this.state.description,
            date: this.state.date,
            reminder: this.state.reminder
        }

        console.log(toDo);

        this.service.save(toDo);
        this.clear();

    }

    clear = () => {
        this.setState(initialState)
    }


    render() {


        return (
            <div className="card">
                <div className="card-header">
                    Inclusão de Atividades
                </div>
                <div className="card-body">
                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <textarea className="form-control"
                                    name="name"
                                    onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Descrição: </label>
                                <textarea className="form-control"
                                    name="description"
                                    onChange={this.onChange} />
                            </div>
                        </div>
                    </div>

                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>
                                    Data: &nbsp;
                                </label>
                                <DateTimePicker
                                    onChange={this.onChange}
                                    value={this.state.date}
                                    className="form-control"
                                    name="date"
                                    onChange={this.onChageDate} />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>
                                    Lembrete: &nbsp;
                                </label>
                                <DateTimePicker
                                    onChange={this.onChange}
                                    value={this.state.reminder}
                                    className="form-control"
                                    name="reminder"
                                    onChange={this.onChageDates}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-3">
                            <button type="button"
                                className="btn btn-primary"
                                onClick={this.OnSubmit}>
                                Salvar
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        )
    }
}