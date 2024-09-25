// import NewClassComponent from "./examples/lecture_2/components/NewClassComponent"
// import SimpleCounterComponent from "./examples/lecture_2/components/SimpleCounterComponent"
import { Component } from "react"
import Timer from "./examples/lecture_2/components/timer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      showTimer: true,
    }
    this.toggleTimer = this.toggleTimer.bind(this)
  }

  toggleTimer() {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }))
  }

  render() {
    console.log(this.state.showTimer)
    return (
      <>
        {/* <NewClassComponent /> */}
        {/* <SimpleCounterComponent /> */}
        {this.state.showTimer ? <Timer /> : null}
        <button onClick={this.toggleTimer}>Show/Hide Timer</button>
      </>
    )
  }
}

export default App
