import React from 'react'

import ProductService from '../../app/productService'
import { withRouter } from 'react-router-dom'

const initialState = {
    name: '',
    sku: '',
    description: '',
    price: 0,
    supplier: '',
    successAdd: false,
    errors: []
}

class AddProduct extends React.Component {

    state = initialState

    constructor() {
        super()
        this.service = new ProductService();
    }

    onChange = (e) => {
        const value = e.target.value
        const nameField = e.target.name

        this.setState({
            [nameField]: value
        })
    }

    onSubmit = (e) => {
        const product = {
            name: this.state.name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            supplier: this.state.supplier,
        }
        try{
            this.service.save(product)
            this.clear()
            this.setState({successAdd : true})
        }
        catch(error){
            const errors = error.errors
            this.setState({errors: errors})
        }

        
    }

    clear = () => {
        this.setState(initialState)
    }

    componentDidMount(){
        const sku = this.props.match.params.sku

        if(sku){
            const result = this.service.getProducts().filter(product => product.sku === sku)

            if(result.length === 1){
                const findProduct = result[0]
                this.setState({...findProduct})
            }
        }
    }

    render() {
        return (
            <div>
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
                                    <label>Preço: *</label>
                                    <input type="text"
                                        value={this.state.price}
                                        name="price"
                                        onChange={this.onChange}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fornecedor: *</label>
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
                                <button className="btn btn-primary" onClick={this.onSubmit}>Salvar</button>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-warning" onClick={this.clear}>Limpar</button>
                            </div>
                        </div>

                    </div>                    
                </div>
                { this.state.successAdd &&
                        <div class="alert alert-dismissible alert-success">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Seu produto foi salvo com sucesso</strong>
                        </div>
                }
                { this.state.errors.length > 0 &&
                    this.state.errors.map( msg =>
                            <div class="alert alert-dismissible alert-danger">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>{msg}</strong>
                            </div>
                         )
                        
                }
                
            </div>

        )
    }

}

export default withRouter(AddProduct);