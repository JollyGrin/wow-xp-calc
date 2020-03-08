import React, { Component } from 'react'
import { getList } from '../../lib/getList'

export default class DungeonSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      list: {},
      dropdown: []
    }
  }

  // define the searchbar
  searchbar = React.createRef()

  // trigger on every entry
  searchbarRefresh = () => {
    this.setState({ search: this.searchbar.current.value })
    this.findDungeon()
  }

  findDungeon = () => {
    const { list } = this.state
    const search = this.searchbar.current.value
    const listKeys = Object.keys(list)
    const matchArr = []

    listKeys.forEach(row => {
      row.startsWith(search.toUpperCase()) ? matchArr.push(list[row]) : null
    })

    this.setState({ dropdown: matchArr })
  }

  compareStrings = (search, list) => {
    list.forEach
  }

  componentDidMount () {
    getList().then(result => {
      this.setState({
        list: result.data
      })
    })
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
            {/* <a href='#' className='dropdown-item'>
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
            </a> */}
            {this.state.dropdown.map((drop, index) => (
              <a key={drop + index} href='#' className='dropdown-item'>
                {drop.name}
                {console.log('drop', drop.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
