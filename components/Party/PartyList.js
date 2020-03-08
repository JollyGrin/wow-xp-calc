import React, { Component, Fragment } from 'react'
import PartyMember from './PartyMember'

export default class PartyList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      party: [10, 20, 25]
    }
  }

  // Defining the add member input box
  addInput = React.createRef()

  //   submits if enter is hit
  _handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.addInput.current.value > 0
        ? this.addMember(this.addInput.current.value)
        : null
    }

    if (e.key === 'Backspace') {
      console.log('input2', this.addInput.current.value)
      !this.addInput.current.value
        ? this.popMember()
        : console.log('input', this.addInput.current.value)
    }
  }

  addMember = level => {
    this.setState({
      party: [...this.state.party, level]
    })
  }

  popMember = () => {
    this.setState({
      party: this.state.party.slice(0, -1)
    })

    // console.log('pop', this.state.party.pop())
  }

  componentDidMount () {
    console.log(this.state)
  }
  render () {
    return (
      <Fragment>
        <ul className='party-list'>
          {this.state.party.map(member => (
            <PartyMember key={member} level={member} />
          ))}
          <input
            ref={this.addInput}
            className='input'
            type='text'
            placeholder='+'
            onKeyDown={this._handleKeyDown}
          ></input>
        </ul>
        <style jsx>{`
          input.input {
            margin-left: -1 rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
