import React from 'react'

import ProductService from '../../app/productService'

export default class BrowseProducts extends React.Component {

    state = {
        products: []
    }

    constructor(){
        super()
        this.service = new ProductService();
    }

    componentWillMount(){
        const products = this.service.getProducts();
        this.setState({products})
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta Produtos
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(product => {
                                return (
                                    <tr>
                                        <th>{product.name}</th>
                                        <th>{product.sku}</th>
                                        <th>{product.price}</th>
                                        <th>{product.supplier}</th>
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