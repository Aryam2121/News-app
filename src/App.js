import './App.css';

import React, { useState, Suspense } from 'react';

import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
       <Router>
    <Navbar />
    <LoadingBar height={3} color="#f11946" progress={progress} />
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
    <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
    <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
    <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
    <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
    <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
    <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
    <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
    </Routes>
    </Suspense>
</Router>
      </div>
    )
 
}

export default App;
