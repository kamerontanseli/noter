import React from 'react';

export const getFromStorage = (name, fallback) => {
  try {
    const data = localStorage.getItem(name)
    if (typeof data === 'string') {
      return JSON.parse(data)
    }
  } catch (e) {}
  return fallback;
}

export const setIds = data => data.map((d, i) => ({ ...d, id: i }))

class Store extends React.Component {
  state = {
    data: []
  }
  constructor (props) {
    super(props)
    this.state.data = getFromStorage('goal-taker-data', [])
  }
  setData = data => {
    const formattedData = setIds(data);
    localStorage.setItem('goal-taker-data', JSON.stringify(formattedData))
    this.setState({ data: formattedData })
  }
  render () {
    return this.props.children({
      data: this.state.data,
      setData: this.setData
    })
  }
}

export default Store
