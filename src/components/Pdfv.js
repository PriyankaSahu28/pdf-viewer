import React, { Component } from 'react'

import PropTypes from 'prop-types'
import PdfViewerComponent from './PdfViewerComponent';


export class Pdfv extends Component {


    constructor(props) {
        super(props);
    
        document.title = props.title;
      }








  
  render() {
    //console.log("render")
    // let { title, description, urlToImage, newsurl } = this.props;
    return (
      
      <div className="App">
			<div className="App-viewer">
				<PdfViewerComponent document={ `${document.title}`} />
			</div>
		</div>

    )
  }
}

export default Pdfv
