import "./app.css";
import { Content } from "./layouts/Content";
import { Footer } from "./layouts/Footer/Footer";
import { Header } from "./layouts/Header/Header";

function App() {
  return (
    <div style={{}}>
      <Header />

      <main>
        <Content />
      </main>

      <Footer />
    </div>
  );
}

export default App;
