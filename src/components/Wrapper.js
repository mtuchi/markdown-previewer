import React, { Component } from 'react';

import Editor from './Editor';
import Previewer from './Previewer';

class Wrapper extends Component {

  render() {
    return (
      <div>
        <Editor />
        <div className="vertical separator"></div>
        <Previewer />
      </div>
    );
  }
}

export default Wrapper
