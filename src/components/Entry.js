import React from 'react';
import { useState } from "react";
import PdfViewerComponent from "./PdfViewerComponent";

 import './Entry.css';
import {Link} from "react-router-dom";

const Entry = () => {
    const [document, setDocument] = useState("");
  
  return (
    <div>
       
      <h1>Documents </h1>
      <h1 className='line'>________________</h1>
     
      <p className='doc1'><a href="javascript:void(0);" 
       onClick={() => setDocument("doc1.pdf")}
      >- Sample document1.pdf</a>
      </p>  
   
      
        <p className='doc2'><a href="javascript:void(0);"  
         onClick={() => setDocument("doc2.pdf")}
        >- Sample document2.pdf</a></p>
      
          <p className='doc3'><a href="javascript:void(0);" 
           onClick={() => setDocument("doc3.pdf")}
          >- Sample document3.pdf</a></p>
    
           <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
    
  )
 
}
// export function Doc1(){
//     const [document, setDocument] = useState("");
//     return
//       <p className='doc1'><a href="javascript:void(0);" onClick={() => setDocument("doc1.pdf")}>- Sample document1.pdf</a>
//       </p> 
  
//     }
//     export function Doc2(){
//         const [document, setDocument] = useState("");
//         return
//           <p className='doc2'><a href="javascript:void(0);" onClick={() => setDocument("doc2.pdf")}>- Sample document1.pdf</a>
//           </p> 
      
//         }
//         export function Doc3(){
//             const [document, setDocument] = useState("");
//             return
//               <p className='doc3'><a href="javascript:void(0);" onClick={() => setDocument("doc3.pdf")}>- Sample document1.pdf</a>
//               </p> 
          
//             }

export default Entry
