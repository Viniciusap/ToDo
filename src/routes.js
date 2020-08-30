import React from 'react'

import { Switch, Route } from "react-router-dom";

import Home from './views/home'
import AddProduct from './views/products/add'
import AddTodo from './views/todo/addTodo'
import BrowseProducts from './views/products/browse'
import BrowseToDo from './views/todo/browse'

export default () => {
    return(
            <Switch>
                <Route exact path="/add-products/:sku?" component={AddProduct} />
                <Route exact path="/add-todo/:id?" component={AddTodo} />
                <Route exact path="/BrowseProducts" component={BrowseProducts} />
                <Route exact path="/BrowseToDo" component={BrowseToDo} />
                <Route exact path="/" component={Home} />
            </Switch>
    )
}