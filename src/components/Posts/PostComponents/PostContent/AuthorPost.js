import SvgButtons from "../svgButtons/SvgButtons.js"
import "./authorPost.css"

function AuthorPost(props) {
  return (
    <div className="author-post">
      <p className="content">{props.props.content}</p>
      <div className="author-img">
        <img className="post-img" src={props.props.image} alt="post"></img>
      </div>
      <SvgButtons />
    </div>
  )
}

export default AuthorPost
