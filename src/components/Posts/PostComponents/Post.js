import AuthorPost from "./PostContent/AuthorPost"
import "./Post.css"

function Post(props) {
  return (
    <div className="Post">
      <div className="img-box">
        <img
          className="img"
          src={props.author.photo}
          alt={props.author.name}
        ></img>
      </div>
      <div className="author">
        <div className="info">
          <h5 className="name">{props.author.name}</h5>
          <p className="nickname">{props.author.nickname}</p>
          <p className="date">{props.date}</p>
        </div>
        <AuthorPost props={props} />
      </div>
    </div>
  )
}

export default Post
