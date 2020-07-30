import React from 'react'

export default class AddProduct extends React.Component {

    state = {
        name :'',
        sku: '',
        description: '',
        price: 0,
        supplier: ''
    }

    onChange = (e) =>{
       const value = e.target.value
       const nameField = e.target.name

       this.setState({
        [nameField]: value
       })
    }

    onSubmit = (e) =>{
        console.log(this.state)
    }

    Clear = (e) =>{
        console.log("limpar")
        this.setState({
            name: '',
            sku: '',
            description: '',
            price: 0,
            supplier: ''
           })
     }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" 
                                        value={this.state.name} 
                                        name="name" 
                                        onChange={this.onChange} 
                                        className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" 
                                        value={this.state.sku} 
                                        name="sku" 
                                        onChange={this.onChange} 
                                        className="form-control" />
                            </div>
                        </div>
                    </div>

                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea value={this.state.description} 
                                            name="description" 
                                            onChange={this.onChange} 
                                            className="form-control" />
                            </div>
                        </div>
                    </div>

                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço:</label>
                                <input type="text" 
                                        value={this.state.price} 
                                        name="price" 
                                        onChange={this.onChange} 
                                        className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor:</label>
                                <input type="text" 
                                        value={this.state.supplier} 
                                        name="supplier" 
                                        onChange={this.onChange} 
                                        className="form-control" />
                            </div>
                        </div>
                    </div>

                    {/* Linha */}
                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-success" onClick={this.onSubmit}>Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-warning" onClick={this.Clear}>Limpar</button>
                        </div>
                    </div>


                </div>
            </div>

        )
    }

}
