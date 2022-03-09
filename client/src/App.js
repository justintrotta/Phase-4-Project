import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import AddPartForm from './AddPartForm.js';
import AddSupplierForm from './AddSupplierForm.js';
import AddOrderForm from './AddOrderForm.js';

function App() {

  const [parts, setParts] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/parts").then((response) => response.json()).then(setParts);
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

  return (
    <div>
      <AddSupplierForm/>
      <AddOrderForm/>
      <AddPartForm/>
      {partsMap}
    </div>
  );
}

export default App;
