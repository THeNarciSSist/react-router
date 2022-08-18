import "./Posts.css"
import React, { Component } from "react"
import Post from "./PostComponents/Post"
import Header from "../Header/Header"
import { ANAKIN_IMAGE, RAY_IMAGE } from "../../const"

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = { baseUrl: props.location.pathname }
  }
  render() {
    const { state } = this
    return (
      <div className="post-block">
        <Header url={state.baseUrl} />
        <Post
          author={{
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
        <Post
          author={{
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
        <Post
          author={{
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
        <Post
          author={{
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
          }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
      </div>
    )
  }
}

export default Posts
