import React, { Component } from 'react'

export default class DungeonSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  searchbar = React.createRef()
  searchbarRefresh = () => {
    this.setState({ search: this.searchbar.current.value })
  }

  render () {
    return (
      <div
        className={`dropdown ${
          this.state.search.length > 0 ? 'is-active' : ''
        }`}
      >
        <div className='dropdown-trigger'>
          <div className='field'>
            <p className='control is-expanded has-icons-right'>
              <input
                ref={this.searchbar}
                className='input'
                type='search'
                placeholder='Search...'
                onChange={this.searchbarRefresh}
              />
              <span className='icon is-small is-right'>
                <i className='fas fa-search'></i>
              </span>
            </p>
          </div>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <a href='#' className='dropdown-item'>
              SM Library
            </a>
            <a href='#' className='dropdown-item'>
              SM Graveyard
            </a>
            <a href='#' className='dropdown-item'>
              SM Cathedral
            </a>
            <a href='#' className='dropdown-item'>
              SM Armory
            </a>
          </div>
        </div>
      </div>
    )
  }
}
