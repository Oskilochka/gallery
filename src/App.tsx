import React from 'react'
import './App.css'
import {Navbar} from "./components/Navbar"
import {UploadForm} from "./components/UploadForm"
import {ImagesList} from "./components/ImagesList";

function App() {
  return (
    <div className="App">
        <Navbar />
        <h1>Add your favourite picture</h1>
        <UploadForm />
        <ImagesList />
    </div>
  )
}

export default App
