import React from 'react'

import ProductService from '../../app/productService'

export default class BrowseProducts extends React.Component {

    state = {
        products: []
    }

    componentWillMount(){
        
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
                            this.state.products.map(products => {
                                return (
                                    <tr>
                                        <th>{products.nome}</th>
                                        <th>{products.sku}</th>
                                        <th>{products.price}</th>
                                        <th>{products.supplier}</th>
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