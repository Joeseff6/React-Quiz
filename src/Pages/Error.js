import { Link } from "react-router-dom";

const Error = () => {
  return (
    <h1 className="text-center">There is no content here! Please go <Link to="/" style={{  color: "#FF481F" }}>home</Link>.</h1>
  )
}

export default Error;