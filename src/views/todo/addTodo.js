import React from 'react'
import DateTimePicker from 'react-datetime-picker';

export default class AddTodo extends React.Component {
    state = {
        date: new Date()
    }

    onChange = date => {
        this.setState({ date })
    }

    clica = (e) => {
        alert(this.state.date)
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
                                <textarea className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Descrição: </label>
                                <textarea className="form-control" />
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
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>
                                    Lembrete: &nbsp;
                            </label>
                                <DateTimePicker
                                    onChange={this.onChange}
                                    value={this.state.date}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Linha */}
                    <div className="row">
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={this.clica}>
                            Primary
                        </button>
                    </div>

                </div>
            </div>

        )
    }
}