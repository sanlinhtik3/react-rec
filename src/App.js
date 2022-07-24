import { Routes, Route, Link, useParams } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Human = props => {
  const { human } = useParams()

  return (
    <h1>Profile {human}</h1>
  )
}

const App = props => {

  return (
    <div>
      <h1>You can do it. I belive in you.</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Routes>
        <Route path="/:human" element={<Human/>} />
      </Routes>
    </div>
  )
}

export default App;