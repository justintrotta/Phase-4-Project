import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPartForm from './AddPartForm.js';
import AddSupplierForm from './AddSupplierForm.js';
import AddOrderForm from './AddOrderForm.js';
import SupplierList from './SupplierList';
import OrderList from './OrderList';
import Login from "./Login";
import Signup from "./Signup";

ReactDOM.render(
<>
  <Router>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/suppliers" element={<SupplierList />}/>
      <Route path="/orders" element={<OrderList />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="parts"/>
      <Route path="add-orders" element={<AddOrderForm/>}/>
      <Route path="add-suppliers" element={<AddSupplierForm />}/>
    </Routes>
  </Router>
</>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
