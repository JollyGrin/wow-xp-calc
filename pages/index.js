import React, { Component } from 'react'
import TheHead from '../components/TheHead'
import Sidebar from '../components/Sidebar'
import Display from '../components/Display'

export default class index extends Component {
  render () {
    return (
      <div className='main'>
        <TheHead />
        <div className='columns'>
          <div className='column is-3 left-panel'>
            <Sidebar />
          </div>
          <div className='column right-panel'>
            <Display />
          </div>
        </div>
      </div>
    )
  }
}
