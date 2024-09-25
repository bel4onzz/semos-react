import React, { Component } from "react"
import PropTypes from "prop-types"

class NewClassComponent extends Component {
  componentDidMount() {
    console.log("The component is mounted!")
  }

  render() {
    console.log("The component is rendered!")
    console.log("props", this.props)
    return (
      // This is a React Fragment
      <React.Fragment>
        <h1>My new class component</h1>
        {this.props.name}
        {this.props.age}
        <br />
        {this.props.randomArray[0]}
        <p>This is {this.props.person.name}</p>
      </React.Fragment>
    )
  }
}

NewClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  randomArray: PropTypes.arrayOf(PropTypes.number),
  person: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
  }),
}

export default NewClassComponent
