import React from 'react'

export class BrowseProducts extends React.Component{

    state = {
        products
    }

    render(){
        return(
            <teble>
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
                    {this.state.products.map(
                        
                    )}
                </tbody>
            </teble>
        )
    }
}