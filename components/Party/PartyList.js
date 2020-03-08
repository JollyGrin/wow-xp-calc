import React, { Component } from 'react'
import PartyMember from './PartyMember'

export default class PartyList extends Component {
    render() {
        return (
            <div>
                <ul className="party-list">
                    <PartyMember />
                    <PartyMember />
                    <PartyMember />
                    <input class="input" type="text" placeholder="+ Add"></input>
                </ul>
            </div>
        )
    }
}
