import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GoalList from './pages/GoalList'
import GoalCreate from './pages/GoalCreate'
import GoalDetail from './pages/GoalDetail'
import GoalDelete from './pages/GoalDelete'
import Container from './ui/Container'

const App = () => (
  <BrowserRouter>
    <Container>
      <Switch>
        <Route exact path="/" component={GoalList} />
        <Route exact path="/create" component={GoalCreate} />
        <Route
          exact
          path="/goal/:id"
          component={({ match }) => <GoalDetail id={match.params.id} />}
        />
        <Route
          exact
          path="/goal/:id/delete"
          component={({ match }) => <GoalDelete id={match.params.id} />}
        />
      </Switch>
    </Container>
  </BrowserRouter>
)

export default App
