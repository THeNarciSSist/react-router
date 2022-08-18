import React, { Component } from "react"
import "./ContactInfo.css"
import { contacts } from "../../const"
import maleImg from "../../img/male.png"
import femaleImg from "../../img/female.png"
import exitImg from "../../img/arrow-left.png"
import { Link } from "react-router-dom"

class ContactInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { baseUrl: props.location.pathname, contact: undefined }
  }

  componentDidMount() {
    // imitating fetching data from server
    const contactName = this.state.baseUrl.split("/")[2]
    function promise() {
      return new Promise((resolve) => {
        const contact = contacts.find((element) => {
          return element.firstName === contactName
        })
        resolve(contact)
      })
    }
    promise().then((res) => this.setState({ contact: res }))
  }
  render() {
    const { state } = this
    {
      if (!state.contact) {
        return <div className="wait">Please wait...</div>
      } else {
        return (
          <div>
            <div className="user-info">
              <div className="name">
                <h4>
                  {state.contact.firstName} {state.contact.lastName}
                </h4>
              </div>
              {state.contact.gender === "male" ? (
                <div className="male-img">
                  <img alt="male" src={maleImg}></img>
                </div>
              ) : state.contact.gender === "female" ? (
                <div className="female-img">
                  <img alt="female" src={femaleImg}></img>
                </div>
              ) : (
                <div className="unknown">
                  <h5>Unknown</h5>
                </div>
              )}
              <div className="number">
                <h5>{state.contact.phone}</h5>
              </div>
            </div>
            <div className="user-content">
              <Link to="/contacts">
                <div className="exit-button">
                  <img alt="exit" src={exitImg}></img>
                </div>
              </Link>
              <div className="chatting-section">
                <div className="chat">
                  <ul className="chatting-list">
                    <li className="chatting-item receiver">
                      <p>Good Evening!</p>
                    </li>
                    <li className="chatting-item sender">
                      <p>Hey! Where are you?</p>
                    </li>
                    <li className="chatting-item receiver">
                      <p>Do you know what time it is?</p>
                    </li>
                    <li className="chatting-item sender">
                      <p>It's morning in Tokyo😎</p>
                    </li>
                    <li className="chatting-item receiver">
                      <p>Ohh. It's night in Ukraine😴</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}
export default ContactInfo
