import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import Entry from './components/Entry';
import { Pdfv } from './components/Pdfv';
import React, { Component } from 'react'
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch, Routes,Route,Link
} from "react-router-dom";
import { ViewState } from 'pspdfkit';


export class App extends Component {
  

  render() {
    const cookies = new Cookies();

    
      
    return (
      
      
      <div> 
        <Router>
        
        <Routes>
              
           
        <Route path="/" element={< Entry   />}/>

          

          <Route path="/doc1" element={<Pdfv title = {cookies.get('user')}  />}/> 
          <Route path="/doc2" element={<Pdfv title = {cookies.get('user')}  />}/> 
          <Route path="/doc3" element={<Pdfv title = {cookies.get('user')}  />}/>         
        </Routes>
        </Router>
        </div>
    );
  }
}


export default App;




