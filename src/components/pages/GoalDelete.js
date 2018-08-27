import React from 'react'
import { Redirect } from 'react-router-dom'
import Store from '../Store'
import Header from '../ui/Header'
import Button from '../ui/Button'

class GoalDelete extends React.Component {
  state = {
    redirect: false
  }
  render () {
    const { id } = this.props
    return (
      <Store>
        {({ data, setData }) => {
          const task = data.filter(t => t.id === Number(id))[0]

          if (this.state.redirect || task == null) {
            return <Redirect to="/" />
          }

          return (
            <React.Fragment>
              <Header title={`Delete ${task.title}?`} to="/" actionText="Back" />
              <main>
                <Button
                  primary
                  onClick={() => {
                    setData(data.filter(d => d.id !== Number(id)))
                    this.setState({ redirect: true })
                  }}
                >
                  Delete
                </Button>
              </main>
            </React.Fragment>
          )
        }}
      </Store>
    )
  }
}

export default GoalDelete
