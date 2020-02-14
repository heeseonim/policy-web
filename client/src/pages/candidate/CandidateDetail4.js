// import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import pdfFile from "./pdf/Candidate_4.pdf";
import CommentViewer from '../../components/comments/CommentViewer'

import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Grid,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react'

export default class StickyExampleAdjacentContext extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pages: []
  };

  contextRef = createRef();
  
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  
  render() {
    const { numPages } = this.state;
    return (
      <Ref innerRef={this.contextRef}>
        <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
        <Grid.Column width={4}>
              <Document file={pdfFile} onLoadSuccess={this.onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
        </Grid.Column>
        <Grid.Column width={4}>
              <Rail position='right'>
                <Sticky context={this.contextRef}>
                <CommentViewer pname="유승민" pId="306"/>
                </Sticky>
              </Rail>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Ref>
    )
  }
}
