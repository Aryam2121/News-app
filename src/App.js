
import './App.css';

// import * as ReactDOM from 'react-dom/client';
import React, { element } from 'react'
import Navbar from './elements/Navbar';
import News from './elements/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

export default class App extends element {
  c ='John';
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
 
        <Routes>
<Route path="/business" element={<News pageSize={6} country="in" category="/business"/>} ></Route>
 <Route path="/ entertainment" element={<News pageSize={6} country="in" category="/entertainment"/>} ></Route>
 <Route path="/ general" element={<News pageSize={6} country="in" category="/general"/>}></Route>
 <Route path="/" element={"/health"}></Route>
 <Route path="/ science" element={<News pageSize={6} country="in" category="/science"/>} ></Route>
 <Route path="/ sports" element={<News pageSize={6} country="in" category="/sports"/>} ></Route>
 <Route path="/ technology" element={<News pageSize={6} country="in" category="/technology"/>} ></Route> 
          </Routes>
          </BrowserRouter>
      </div>
    )
  }
}

