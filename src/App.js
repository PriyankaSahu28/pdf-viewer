import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import Entry from './components/Entry';
import React, { Component } from 'react'

import "./App.css";

import {
  BrowserRouter as Router,
  Switch, Routes,Route,Link
} from "react-router-dom";

const document = "doc1.pdf"

export class App extends Component {
  state={
    selectedTab:0
   }
   setselectedTab=(selectedTab)=>{
     this.setState({selectedTab:selectedTab})
   }
  
  render(){
  return (
    
   
     <div className="App">
   
 <Router>
<Routes>
   
         <Route path="/" element={<Entry/>}></Route>
          {/* { <Route path="/doc1" element={<Entry setselectedTab={this.doc1.pdf}  PdfViewerComponent document={this.setselectedTab} />}></Route>  }
          */}
           </Routes>
          </Router>
     </div>
    
    
  );
}
}

function pdfv() {
	return (
		<div className="App-o">
			<div className="App-viewer-o">
				<PdfViewerComponent document={'doc1.pdf'} />
			</div>
		</div>
	);}
export default App;