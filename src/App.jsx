import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import MyComponent from './components/Mycomponent/MyComponent'

function App() {
  return (
    <div>
    <Router>
     <Routes>
       <Route path='/' element = {<MyComponent/>}/>
     </Routes>
    </Router>
 </div>
  )
}

export default App

