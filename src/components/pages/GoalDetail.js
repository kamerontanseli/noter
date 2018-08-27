import React from 'react'
import { Redirect } from 'react-router-dom'
import { toYearMonthDate } from '../utils/date'
import Store from '../Store'
import Header from '../ui/Header'
import SubTaskList from '../ui/SubTaskList'
import SubTaskInput from '../ui/SubTaskInput'
import SubTaskCreate from '../ui/SubTaskCreate'
import InputGroup from '../ui/InputGroup'

const GoalDetail = ({ id }) => (
  <Store>
    {({ data, setData }) => {
      const task = data.filter(t => t.id === Number(id))[0]

      if (!task) {
        return <Redirect to="/" />
      }

      const changeTask = changes => {
        setData(
          data.map(d => {
            if (d.id === Number(id)) {
              return { ...d, ...changes(d) }
            } else {
              return d
            }
          })
        )
      }

      return (
        <React.Fragment>
          <Header title={task.title} to="/" actionText="Back" />
          <main>
            <p>
              <strong>Due by {toYearMonthDate(task.due)}</strong>
            </p>
            <InputGroup title="Sub Tasks" name="tasks">
              <SubTaskCreate
                onSubmit={value => {
                  changeTask(d => ({
                    tasks: [...d.tasks, { value, complete: false }]
                  }))
                }}
              />
            </InputGroup>
            <SubTaskList>
              {task.tasks.map((task, index) => (
                <SubTaskInput
                  {...task}
                  onDelete={() => {
                    changeTask(d => ({
                      tasks: d.tasks.filter((t,i) => i !== index)
                    }))
                  }}
                  onChange={changes => {
                    changeTask(d => ({
                      tasks: d.tasks.map((task, i) => {
                        if (i === index) {
                          return { ...task, ...changes }
                        } else {
                          return task
                        }
                      })
                    }))
                  }}
                  key={index}
                />
              ))}
            </SubTaskList>
          </main>
        </React.Fragment>
      )
    }}
  </Store>
)

export default GoalDetail
