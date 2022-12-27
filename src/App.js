import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import Entry from './components/Entry';
//import  {Doc1} from './components/Entry';
// import  Doc2 from './components/doc1.pdf';
// import  Doc3 from './components/doc1.pdf';

import "./App.css";


import React from "react";
import {
  BrowserRouter as Router,
  Switch, Routes,Route,Link
} from "react-router-dom";


function App() {
  

  return (
    
   
    <div className="App">
       <Router>
      <Routes>
      <Route path="/" element={<Entry />}></Route>
      



       {/* <Switch>  */}
      
        {/* <Route path="/doc1" element={<Doc1 />}></Route> */}
        {/* <Route path="/doc2" element={<Doc2 />}></Route>
         <Route path="/doc3" element={<Doc3/>}></Route>  */}
         {/* </Switch>  */}
         </Routes>
         </Router>
    </div>
    
    
  );
}

export default App;