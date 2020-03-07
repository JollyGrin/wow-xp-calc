import React, { Component } from 'react'
import TheHead from '../components/TheHead'

export default class index extends Component {
    render() {
        return (
            <div>
                <TheHead />
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <h1 className="title">
                                Bulma Installed
                                </h1>
                                <a className="button is-large is-primary">Test Button</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
