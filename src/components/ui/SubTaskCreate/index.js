import './SubTaskCreate.css'
import React from 'react'
import Input from '../Input'
import Button from '../Button'

class SubTaskCreate extends React.Component {
  state = {
    value: ''
  }
  save = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({ value: '' })
  }
  render() {
    return (
      <form action="" onSubmit={this.save} className="SubTaskCreate">
        <div className="SubTaskCreate-input">
          <Input
            placeholder="E.g: Study downard facing dog"
            value={this.state.value}
            onChange={e => this.setState({ value: e.currentTarget.value })}
            required
            type="text"
          />
        </div>
        <Button primary>+</Button>
      </form>
    )
  }
}

export default SubTaskCreate
