import './GoalForm.css'
import React, { Fragment } from 'react'
import { toYearMonthDate } from '../../utils/date'
import Button from '../Button'
import Input from '../Input'
import InputGroup from '../InputGroup'

class GoalForm extends React.Component {
  state = {
    title: '',
    due: new Date().toISOString(),
    tasks: []
  }
  save = e => {
    this.props.onSubmit(this.state)
    this.setState({
      title: '',
      due: new Date().toISOString(),
      tasks: []
    })
  }
  setValue = key => {
    return e => {
      this.setState({
        [key]: e.currentTarget.value
      })
    }
  }
  render() {
    const { title, due } = this.state

    return (
      <Fragment>
        <form action="" onSubmit={e => e.preventDefault()}>
          <InputGroup name="title" title="The Goal">
            <Input
              name="title"
              placeholder="E.g: Become a yoga teacher"
              type="text"
              value={title}
              required
              onChange={e => {
                this.setState({
                  title: e.currentTarget.value
                })
              }}
            />
          </InputGroup>
          <InputGroup name="due" title="Due date">
            <Input
              type="date"
              onChange={e => {
                this.setState({
                  due: toYearMonthDate(e.currentTarget.value)
                })
              }}
              value={toYearMonthDate(due)}
              name="due"
              min={toYearMonthDate()}
              required
            />
          </InputGroup>
          <Button primary onClick={this.save}>
            Create Goal
          </Button>
        </form>
      </Fragment>
    )
  }
}

export default GoalForm
