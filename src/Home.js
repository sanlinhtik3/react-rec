import { Link } from "react-router-dom";
import Fox_1 from './images/Fox-1.png';
import './Main.css'

// console.log(Fox_1)

const Home = props => {

  const Images = [
    {title: "Fox one", src: 'Fox-1'},
    {title: "Fox two", src: 'Fox-2'},
    {title: "Fox three",src: 'Fox-3'},
    {title: "Fox four", src: 'Fox-4'},
  ]

    return (
      <div>
        <h1 className="duc">Repo Hub | Home </h1>
        <p>
          ကျွန်မက နှင့်းဆီပါမောင်
        </p>
        <Link to="/about">About</Link>
        {Images.map( (image, index) => <img key={index} src={require(`./images/${image.src}.png`)} className="img" /> )}
      </div>
    )
  }
  
  export default Home;