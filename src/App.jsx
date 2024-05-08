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
       <Route path='/home' element = {<MyComponent/>}/>
       <Route path='/flashcard' element = {<MyComponent/>}/>
       <Route path='/Contact' element = {<MyComponent/>}/>
       <Route path='/faq' element = {<MyComponent/>}/>
       <Route path='/study' element = {<MyComponent/>}/>
       <Route path='/quiz' element = {<MyComponent/>}/>
       <Route path='/test' element = {<MyComponent/>}/>
       <Route path='/game' element = {<MyComponent/>}/>
       <Route path='/others' element = {<MyComponent/>}/>
     </Routes>
    </Router>
 </div>
  )
}

export default App

