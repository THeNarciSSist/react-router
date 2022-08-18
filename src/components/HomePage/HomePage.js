import "./HomePage.css"
import Header from "../Header/Header"
import logo from "../../logo.svg"

import React, { Component } from "react"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { baseUrl: props.location.pathname }
  }
  render() {
    const { state } = this
    return (
      <div className="home-block">
        <Header url={state.baseUrl} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    )
  }
}

export default HomePage
