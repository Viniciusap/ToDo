import React from 'react'
import ProductService from '../../app/productService'
import Card from '../../components/card'
import { withRouter } from 'react-router-dom'


class BrowseProducts extends React.Component {

    state = {
        products: []
    }

    constructor() {
        super()
        this.service = new ProductService();
    }

    componentWillMount() {
        const products = this.service.getProducts();
        this.setState({ products })
    }

    prepEdit = (sku) => {
        this.props.history.push(`/add-products/${sku}`)
    }

    delete = (sku) => {
        const products = this.service.delete(sku);
        this.setState({ products })
    }

    render() {
        return (
            <Card header="Consulta Produtos">
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
                        {this.state.products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <th>{product.name}</th>
                                    <th>{product.sku}</th>
                                    <th>{product.price}</th>
                                    <th>{product.supplier}</th>
                                    <th>
                                        <button onClick={() => this.prepEdit(product.sku)} className="btn btn-primary">Editar</button>
                                        <button onClick={() => this.delete(product.sku)} className="btn btn-danger">Apagar</button>
                                    </th>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </Card>
        )
    }
}

export default withRouter(BrowseProducts)