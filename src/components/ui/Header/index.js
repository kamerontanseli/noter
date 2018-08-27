import './Header.css'
import React from 'react';
import {ButtonLink} from '../Button'

const Header = ({ title, to, actionText }) => (
  <header className="Header">
    <h1 className="Header-title">{title}</h1>
    <ButtonLink to={to}>{actionText}</ButtonLink>
  </header>
)

export default Header
