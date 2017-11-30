import React, { Component } from 'react';

import Editor from './Editor';
import Previewer from './Previewer';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {value: ''}
  }
  handleChange = (e) => {
    this.setState({value : e.target.value})
  }

  render() {
    return (
      <div className="Wrapper-container">
        <Editor update={this.handleChange} />
        <div className="Vertical-separator"></div>
        <Previewer preview={this.state.value} />
      </div>
    );
  }
}

export default Wrapper
