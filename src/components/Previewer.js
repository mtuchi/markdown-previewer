import React from 'react';
import Parser from 'marked';

const Previewer = (props) => {

  return (
    <div className="Preview-container"
      dangerouslySetInnerHTML={{__html:  Parser(props.preview)}}>
    </div>
  )
}

Previewer.defaultProps = {
  preview: "__Markdown Preview__"
}

export default Previewer;
