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
      <div>
        <Editor update={this.handleChange} />
        <div className="vertical separator"></div>
        <Previewer preview={this.state.value} />
      </div>
    );
  }
}

export default Wrapper
