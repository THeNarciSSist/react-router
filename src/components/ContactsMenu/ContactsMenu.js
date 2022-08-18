import React, { Component } from "react"
import Header from "../Header/Header"
import Search from "./SearchSection/Search"
import "./ContactsMenu.css"
import { contacts } from "../../const"

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = { baseUrl: props.location.pathname }
  }
  render() {
    const { state } = this
    return (
      <div>
        <Header url={state.baseUrl} />
        <div className="block">
          <Search contacts={contacts} />
        </div>
      </div>
    )
  }
}

export default Contacts
