import React, { Component } from "react"

class NewClassComponent extends Component {
  componentDidMount() {
    console.log("The component is mounted!")
  }

  render() {
    console.log("The component is rendered!")
    return (
      // This is a React Fragment
      <React.Fragment>
        <h1>My new class component</h1>
      </React.Fragment>
    )
  }
}

export default NewClassComponent
