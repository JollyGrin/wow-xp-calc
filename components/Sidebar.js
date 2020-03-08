import React, { Component } from 'react'
import PartyList from './Party/PartyList'
import DungeonSearch from './DungeonSearch/DungeonSearch'

export default class Sidebar extends Component {
  render () {
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <h3 className='subtitle'>I want to run</h3>
            {/* <input class="input" type="text" placeholder="dungeon"></input> */}
            <DungeonSearch />
            <br />
            <br />
            <h3 className='subtitle'>with a group of:</h3>
            <br />
            <br />
            <PartyList />
          </div>
        </section>
      </div>
    )
  }
}
