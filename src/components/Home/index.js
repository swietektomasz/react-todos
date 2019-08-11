import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import TodoList from '../Todos'
import Edit from '../Todos/Edit'

const Home = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos/:id" component={Edit} />
        <Route path="/todos" component={TodoList} />
        <Redirect from="/" to="/todos" />
      </Switch>
    </BrowserRouter>
  )
}

export default Home
