import React from 'react'
import DateTimePicker from 'react-datetime-picker';

import toDoService from '../../app/todoService'
import { withRouter } from 'react-router-dom'

const initialState = {
    id: '',
    name: '',
    description: '',
    date: new Date(),
    reminder: new Date(),
    successAdd: false,
    errors: [],
}

class AddTodo extends React.Component {
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

        try{
            this.service.save(toDo);
            this.clear();
            this.setState({ successAdd: true })
        }
        catch (error){
            const errors = error.errors
            this.setState({errors:errors})
        }
        

    }

    clear = () => {
        this.setState(initialState)
    }

    componentDidMount(){
        const id = this.props.match.params.id
        
        if(id){
            const result = this.service.getByIndex(id)
            console.log(result)
            if(result.id != ""){
                this.setState({...result})
            }
        }

    }


    render() {


        return (
            <div className="card">
                <div className="card-header">
                    Inclusão de Atividades
                </div>
                <div className="card-body">
                    {
                        this.state.successAdd &&
                        <div className="alert alert-dismissible alert-success">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>Sua tarefa foi salva com sucesso</strong>
                        </div>
                    }
                    {
                        this.state.errors && this.state.errors.length > 0 &&
                        this.state.errors.map(msg =>
                            <div key={msg} className="alert alert-dismissible alert-danger">
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                <strong>{msg}</strong>
                            </div>
                        )
                    }
                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <textarea className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Descrição: </label>
                                <textarea className="form-control"
                                    name="description"
                                    value={this.state.description}
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
export default withRouter(AddTodo)