import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import './Main.css'

const App = props => {

  return (
    <div>
      <h1>You can do it. I belive in you.</h1>
      <ul>
        <li><NavLink to="/" className={({isActive}) => isActive && "active"} >Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive && "active"} >About</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;