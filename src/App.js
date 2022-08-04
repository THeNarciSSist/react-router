import "./App.css"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import Posts from "./components/Posts/Posts"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/posts" component={Posts} />
        <Route path="/photos" component={Posts} />
      </Router>
    </div>
  )
}

export default App
