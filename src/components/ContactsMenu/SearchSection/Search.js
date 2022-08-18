import React, { Component } from "react"
import "./Search.css"
import CreateContactsList from "../Contacts/Contacts.js"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      checkMale: true,
      checkFemale: true,
      checkUndef: true,
      contacts: props.contacts,
      filteredContacts: [],
    }
  }

  componentDidMount() {
    this.setState({ filteredContacts: this.state.contacts })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    let searchList = []
    const checkboxContactsObj = {
      male: this.state.checkMale,
      female: this.state.checkFemale,
    }

    for (let gender in checkboxContactsObj) {
      if (checkboxContactsObj[gender]) {
        searchList.push(
          ...this.state.contacts.filter((contact) => {
            return contact.gender === gender
          })
        )
      }
    }

    if (this.state.checkUndef) {
      searchList.push(
        ...this.state.contacts.filter((contact) => {
          return contact.gender === undefined
        })
      )
    }

    if (this.state.value) {
      searchList = searchList.filter((contact) => {
        return (
          contact.firstName.includes(
            this.state.value[0].toUpperCase() +
              this.state.value.slice(1).toLowerCase()
          ) ||
          contact.lastName.includes(
            this.state.value[0].toUpperCase() +
              this.state.value.slice(1).toLowerCase()
          ) ||
          contact.phone.includes(this.state.value)
        )
      })
    }
    return searchList
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.value !== this.state.value ||
      prevState.checkMale !== this.state.checkMale ||
      prevState.checkFemale !== this.state.checkFemale ||
      prevState.checkUndef !== this.state.checkUndef
    )
      this.setState({ filteredContacts: snapshot })
  }

  render() {
    const { state } = this

    return (
      <div>
        <div className="search-box">
          <input
            onChange={(e) => this.setState({ value: e.target.value })}
            value={state.value}
            type="text"
            placeholder="type contact name or num"
            className="search"
          ></input>
          <div className="checkbox-block">
            <div>
              <input
                defaultChecked={state.checkMale}
                onChange={() => this.setState({ checkMale: !state.checkMale })}
                type="checkbox"
                id="male"
                name="male"
              ></input>
              <label htmlFor="male">male</label>
            </div>
            <div>
              <input
                defaultChecked={state.checkFemale}
                onChange={() =>
                  this.setState({ checkFemale: !state.checkFemale })
                }
                type="checkbox"
                id="female"
                name="female"
              ></input>
              <label htmlFor="female">female</label>
            </div>
            <div>
              <input
                defaultChecked={state.checkUndef}
                onChange={() =>
                  this.setState({ checkUndef: !state.checkUndef })
                }
                type="checkbox"
                id="not specified"
                name="not specified"
              ></input>
              <label htmlFor="not specified">not specified</label>
            </div>
          </div>
        </div>
        {state.filteredContacts === undefined ? (
          <h1>PLEASE WAIT TO LOAD DATA</h1>
        ) : (
          <CreateContactsList list={state.filteredContacts} />
        )}
      </div>
    )
  }
}

export default Search

// function SearchUser() {
//   const [value, setValue] = useState("")
//   const [checkMale, setCheckMale] = useState(true)
//   const [checkFemale, setCheckFemale] = useState(true)
//   const [checkUndef, setCheckUndef] = useState(true)
//   // const contacts = useContext(ContactsContext)

//   useMemo(() => {
//     searchList = []

//     const checkboxContactsObj = {
//       male: checkMale,
//       female: checkFemale,
//     }

//     for (let gender in checkboxContactsObj) {
//       if (checkboxContactsObj[gender]) {
//         searchList.push(
//           ...contacts.filter((contact) => {
//             return contact.gender === gender
//           })
//         )
//       }
//     }

//     if (checkUndef) {
//       searchList.push(
//         ...contacts.filter((contact) => {
//           return contact.gender === undefined
//         })
//       )
//     }

//     if (value) {
//       searchList = searchList.filter((contact) => {
//         return (
//           contact.firstName.includes(
//             value[0].toUpperCase() + value.slice(1).toLowerCase()
//           ) ||
//           contact.lastName.includes(
//             value[0].toUpperCase() + value.slice(1).toLowerCase()
//           ) ||
//           contact.phone.includes(value)
//         )
//       })
//     }
//   }, [value, contacts, checkMale, checkFemale, checkUndef])

//   return (
//     <>
//       <div className="search-box">
//         <input
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//           type="text"
//           placeholder="type contact name or num"
//           className="search"
//         ></input>
//         <div className="checkbox-block">
//           <div>
//             <input
//               defaultChecked={checkMale}
//               onChange={() => setCheckMale(!checkMale)}
//               type="checkbox"
//               id="male"
//               name="male"
//             ></input>
//             <label htmlFor="male">male</label>
//           </div>
//           <div>
//             <input
//               defaultChecked={checkFemale}
//               onChange={() => setCheckFemale(!checkFemale)}
//               type="checkbox"
//               id="female"
//               name="female"
//             ></input>
//             <label htmlFor="female">female</label>
//           </div>
//           <div>
//             <input
//               defaultChecked={checkUndef}
//               onChange={() => setCheckUndef(!checkUndef)}
//               type="checkbox"
//               id="not specified"
//               name="not specified"
//             ></input>
//             <label htmlFor="not specified">not specified</label>
//           </div>
//         </div>
//       </div>

//       <CreateContactsList list={searchList} />
//     </>
//   )
// }

// export default SearchUser
