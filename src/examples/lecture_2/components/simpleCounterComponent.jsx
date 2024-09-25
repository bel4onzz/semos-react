import { Component } from "react"

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  componentDidMount() {
    console.log("component mounted!") // 2
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update") // 3
    console.log("Previous State", prevState)
    console.log("Current State", this.state)
  }

  render() {
    console.log("state", this.state) // 1
    return (
      <div>
        <h1>Simple Counter Component</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <br />
        <br />
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}

export default SimpleCounterComponent
