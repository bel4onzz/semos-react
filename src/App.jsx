import NewClassComponent from "./examples/lecture_2/components/NewClassComponent"
// import SimpleCounterComponent from "./examples/lecture_2/components/SimpleCounterComponent"
import { Component } from "react"
import ProfileCard from "./examples/lecture_2/components/profileCard"
// import Timer from "./examples/lecture_2/components/timer"

let randomArr = [1, 3, 4, 7, 12, 8, 10, 93]
let person = { name: "John", address: "St 30." }
class App extends Component {
  constructor() {
    super()
    this.state = {
      showTimer: true,
    }
    this.toggleTimer = this.toggleTimer.bind(this) // needs to be binded here
  }

  toggleTimer() {
    this.setState((prevState) => ({
      showTimer: !prevState.showTimer,
    }))
  }

  render() {
    // console.log(this.state.showTimer)
    return (
      <>
        {/* Passing props */}
        {/* <NewClassComponent
          name="Hristijan"
          age={20}
          randomArray={randomArr}
          person={person}
        /> */}
        {/* <SimpleCounterComponent /> */}
        {/* {this.state.showTimer ? <Timer /> : null}
        <button onClick={this.toggleTimer}>Show/Hide Timer</button> */}
        <ProfileCard
          imgUrl="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
          name="John"
          address="random address"
        />
        <ProfileCard
          imgUrl="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid"
          name="Peter"
          address="random address 2"
        />
        <ProfileCard
          imgUrl="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          name="Mia"
          address="random address 3"
        />
      </>
    )
  }
}

export default App
