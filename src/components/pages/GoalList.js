import React from 'react'
import Store from '../Store'
import Header from '../ui/Header'
import Goal from '../ui/Goal'

const GoalList = () => (
  <Store>
    {({ data }) => (
      <React.Fragment>
        <Header title="Goal Tracker" to="/create" actionText="+ Add Goal" />
        <main>
          {data.map(({ title, id, tasks }) => (
            <Goal
              title={title}
              id={id}
              key={id}
              progress={
                (tasks.filter(t => t.completed).length / tasks.length) * 100
              }
            />
          ))}
          {data.length < 1 && <h2>No Goal Created yet</h2>}
        </main>
      </React.Fragment>
    )}
  </Store>
)

export default GoalList
