import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = props => {

  return (
    <div>
      <h1>You can do it. I belive in you.</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App;