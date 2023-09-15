import React from 'react'
import App from './App'
import Create from './Create'
import SinglePost from './components/SinglePost'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const RoutedApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/posts/:id" element={<SinglePost/>}/>
        </Routes>
    </Router>
  )
}

export default RoutedApp