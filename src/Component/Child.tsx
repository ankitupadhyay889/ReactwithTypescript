import React, { Component } from 'react'

type Adpro = {
    children: React.ReactNode,
    styles: React.CSSProperties
}

export default class Child extends Component<Adpro> {
  render() {
    return (
      <div>
          <h1 style={this.props.styles} > Ankit Upadhyay </h1>
          <p> {this.props.children} </p>
      </div>
    )
  }
}
