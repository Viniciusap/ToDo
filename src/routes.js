import React from 'react'

import { HashRouter, Switch, Route } from "react-router-dom";

import Home from './views/home'
import AddProduct from './views/products/add'
import AddTodo from './views/todo/addTodo'

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/add-products" component={AddProduct} />
                <Route exact path="/add-todo" component={AddTodo} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}