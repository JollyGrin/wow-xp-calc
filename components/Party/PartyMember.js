import React, { Component } from 'react'

export default class PartyMember extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 'loading'
    }
  }

  componentDidMount () {
    this.setState({
      level: this.props.level
    })
  }
  render () {
    return (
      <li>
        <span>
          {this.state.level} <a className='remove-member'> - </a>
        </span>
      </li>
    )
  }
}
