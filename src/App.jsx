import Button from "./components/button/button"
import MyClassComponent from "./components/classComponent/myClassComponent"
import { Greeting, Paragraph } from "./components/greeting/greeting"

function App() {
  console.log("render")
  const titleElement = <h2>This is title</h2>

  const titleStyle = {
    color: "red",
    fontSize: "60px",
    marginBottom: "50px",
  }

  return (
    <div style={{}}>
      <div>
        <h1 style={titleStyle}>Hello, world!</h1>
        <p>Welcome to the React 18 app!</p>
      </div>
      {titleElement}
      <Greeting />
      <Paragraph />
      <MyClassComponent />
      <Button />
    </div>
  )
}

export default App
