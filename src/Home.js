import { Link } from "react-router-dom";

const Home = props => {
    return (
      <div>
        <h1>Repo Hub | Home</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
  
  export default Home;