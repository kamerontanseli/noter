import React from 'react'
import { Redirect } from 'react-router-dom'
import Store from '../Store'
import Header from '../ui/Header'
import GoalForm from '../ui/GoalForm'

class GoalCreate extends React.Component {
  state = {
    redirect: false
  }
  render () {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <Store>
        {({ data, setData }) => (
          <section>
            <Header title="Create a Goal" to="/" actionText="Back" />
            <main>
              <GoalForm onSubmit={task => {
                setData([ ...data, task ])
                this.setState({ redirect: true })
              }} />
            </main>
          </section>
        )}
      </Store>
    )
  }
}

export default GoalCreate
