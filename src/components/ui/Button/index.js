import './Button.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonLink = ({ primary, ...props }) => (
  <Link className={`Button ${primary ? 'Button-primary' : ''}`} {...props} />
)

const Button = ({ primary, ...props }) => (
  <button className={`Button ${primary ? 'Button-primary' : ''}`} {...props} />
)

export default Button
