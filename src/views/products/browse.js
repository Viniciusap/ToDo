import React from 'react'
import ProductService from '../../app/productService'
import Card from '../../components/card'
import ProductsTable from '../products/productsTable'
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
                <ProductsTable products={this.state.products} 
                                prepEdit={this.prepEdit} 
                                delete={this.delete} />
            </Card>
        )
    }
}

export default withRouter(BrowseProducts)