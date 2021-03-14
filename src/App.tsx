import React from 'react'
import './App.css'
import {Navbar} from "./components/Navbar"
import {UploadForm} from "./components/UploadForm"
import {ImageGridList} from "./components/ImagesList"
import {Footer} from "./components/Footer";
import {Title} from "./components/Ttile";

export function App() {
    return (
        <div>
            <Navbar/>
            <div className='wrap'>
                <Title/>
                <UploadForm/>
                <ImageGridList/>
                <Footer/>
            </div>
        </div>
    )
}

