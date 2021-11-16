import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { cvLink } from "../../editable-stuff/config";
import useWindowSize from '../../hooks/useWindowSize'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App() {

  const { width } = useWindowSize()

  function onDocumentLoadSuccess() {
    console.log("successfully loaded")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{display: 'flex', padding: '0'}}>
          <div style={{marginLeft: '15px'}}>
            <Document
              file={cvLink}
              width={width}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
            <Page pageNumber={1} width={1100} size="A4"/>
            </Document> 
          </div>      
        </div>
      </div>
    </div>
  );
}








// import React, { useState } from "react";


  

//   return (
//     <>

//     </>
//   );
// }