import './InputGroup.css'
import React from 'react'

const InputGroup = ({ title, children, name, ...props }) => (
  <div className="InputGroup" {...props}>
    <label className="InputGroup-label" htmlFor={name}>{title}</label>
    {children}
  </div>
)

export default InputGroup
