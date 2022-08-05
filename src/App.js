import "./App.css"
import { HashRouter, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import Posts from "./components/Posts/Posts"
import Photos from "./components/Photos/Photos"
import ContactsMenu from "./components/ContactsMenu/ContactsMenu"
import ContactInfo from "./components/ContactInfo/ContactInfo"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/posts" component={Posts} />
        <Route path="/photos" component={Photos} />
        <Route path="/contacts" exact component={ContactsMenu} />
        <Route path="/contacts/:test" component={ContactInfo} />
      </HashRouter>
    </div>
  )
}

export default App
