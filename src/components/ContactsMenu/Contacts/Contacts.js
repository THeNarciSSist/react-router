import React, { Component } from "react"
import "./Contacts.css"
import maleImg from "../../../img/male.png"
import femaleImg from "../../../img/female.png"
import { Link } from "react-router-dom"

class CreateContactsList extends Component {
  constructor(props) {
    super(props)
    this.state = { contacts: props.list }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.list !== state.contacts) {
      return {
        contacts: props.list,
      }
    }
    return null
  }
  render() {
    const { state } = this
    return (
      <div>
        <ul className="contacts-list">
          {state.contacts.map((contact) => {
            return (
              <li key={contact.firstName} className="contacts-item">
                <Link to={`contacts/${contact.firstName}`}>
                  <div className="name">
                    <h4>
                      {contact.firstName} {contact.lastName}
                    </h4>
                  </div>
                  {contact.gender === "male" ? (
                    <div className="gender-img">
                      <img alt="male" src={maleImg}></img>
                    </div>
                  ) : contact.gender === "female" ? (
                    <div className="gender-img">
                      <img alt="female" src={femaleImg}></img>
                    </div>
                  ) : (
                    <div className="unknown">
                      <h5>Unknown</h5>
                    </div>
                  )}
                  <div className="number">
                    <h5>{contact.phone}</h5>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CreateContactsList

// function CreateContactsList(props) {
//   return (
//     <>
//       <ul className="contacts-list">
//         {props.list.map((contact) => {
//           return (
//             <li key={contact.firstName} className="contacts-item">
//               <h4 className="name">
//                 {contact.firstName} {contact.lastName}
//               </h4>
//               {contact.gender === "male" ? (
//                 <img alt="male" src={maleImg} className="gender-img"></img>
//               ) : contact.gender === "female" ? (
//                 <img alt="female" src={femaleImg} className="gender-img"></img>
//               ) : (
//                 <h5>Unknown</h5>
//               )}
//               <h5 className="number">{contact.phone}</h5>
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }

// export default CreateContactsList
