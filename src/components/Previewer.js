import React from 'react';
import Parser from 'marked';
import 'github-markdown-css';

Parser.setOptions({
  renderer: new Parser.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

const Previewer = (props) => {

  return (
    <div>
      { Parser(props.preview) }
    </div>
  )
}

export default Previewer;
