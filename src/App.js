import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const App = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [getAPIs, setGetAPIs] = useState([]);

    const url = 'https://api.sheety.co/1d7623f6539891622cc53522ade8ff95/api/sheet1'
    const add = (e) => {
        e.preventDefault()
        axios.post(url, {
            name, age
        })
    }

    useEffect(()=>{
        axios.get(url)
            .then((res) => setGetAPIs(res.data))
            .catch((error)=>console.log(error.message))
    },[])

  return (
    <>
      <h1>Hello React</h1>
        <form>
            <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" className="form-control" placeholder="String" onChange={(e) => setAge(e.target.value)} />
            <button onClick={add}>Add</button>
        </form>
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {getAPIs.map((API,index) => {
                return (
                    <tr key={index}>
                        <td>{API.name}</td>
                        <td>{API.age}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    </>
  );
}

export default App;
