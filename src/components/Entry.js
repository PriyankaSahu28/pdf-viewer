import React, { Component } from 'react';
import { useState } from "react";
import PdfViewerComponent from "./PdfViewerComponent";

 import './Entry.css';
import {Link} from "react-router-dom";
import { ViewState } from 'pspdfkit';
import Cookies from 'universal-cookie';

export class Entry extends Component {
  render() {
    const cookies = new Cookies();
  
  return (
    <div className="App">
    <div className="App-viewer">
       
      <h1 className='head'>Documents </h1>
      <h1 className='line'>________________</h1>
     
      <p className='doc1'><a href="javascript:void(0);"  
         onClick={() =>  { 
          cookies.set('user', 'doc1.pdf', { path: '/' });
          window.location.href = '/doc1';
            }}
        >- Sample document1.pdf</a></p>
      
         <p className='doc2'><a href="javascript:void(0);"  
         onClick={() =>  { 
          cookies.set('user', 'doc2.pdf', { path: '/' });
          window.location.href = '/doc2';
            }}
        >- Sample document2.pdf</a></p>
      
          <p className='doc3'><a href="javascript:void(0);" 
           onClick={() =>  { 
            cookies.set('user', 'doc3.pdf', { path: '/' });
            window.location.href = '/doc3';
              }}
          >- Sample document3.pdf</a></p>
    
              
    </div></div>
  )
  }
}


export default Entry
