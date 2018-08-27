import './Goal.css'
import React from 'react'
import Meter from '../Meter'
import Anchor from '../Anchor'

const Goal = ({ title, progress, id }) => (
  <section className="Goal">
    <h3 className="Goal-title">
      {title} - {(progress || 0).toFixed(0)}%
    </h3>
    <Meter value={progress || 0} max={100} />
    <section className="Goal-actions">
      <Anchor to={`/goal/${id}`}>View</Anchor>{' '}
      <Anchor to={`/goal/${id}/delete`}>Delete</Anchor>
    </section>
  </section>
)

export default Goal
