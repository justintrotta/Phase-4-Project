import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './Navbar'


function App() {

  const [parts, setParts] = useState([])
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch("http://localhost:3000/parts").then((response) => response.json()).then(setParts);
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/login").then((response) => response.json()).then(setUser);
  }, [])

  const partsMap = parts.map((part) => {
    return (
      <div id={part.id}>
        <h4>{part.name}</h4>
        <h5>{part.year}</h5>
        <p>{part.make}</p>
        <p>{part.model}</p>
      </div>
    )
  })

  console.log(user)

  return (
    <div>
      <Navbar user={user}/>
      {partsMap}
    </div>
  );
}

export default App;
