import './SubTaskInput.css'
import React from 'react'
import Button from '../Button'
import Input from '../Input'

const SubTaskInput = ({ value, completed, onChange, onDelete }) => (
  <div className="SubTaskInput">
    <div className="SubTaskInput-checkbox">
      <input
        type="checkbox"
        checked={completed}
        onChange={e => onChange({ completed: !completed })}
      />
    </div>
    <div className="SubTaskInput-input">
      <Input
        placeholder="Edit your subtask here"
        value={value}
        type="text"
        onChange={e => onChange({ value: e.currentTarget.value })}
      />
    </div>
    <Button type="button" onClick={onDelete}>
      x
    </Button>
  </div>
)

export default SubTaskInput
