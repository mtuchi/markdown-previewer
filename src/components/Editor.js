import React from 'react';

const Editor = (props) => {
  return (
    <div className="Editor-container">
      <textarea placeholder="Write down your markdown syntax.."
         onChange={props.update}>         
      </textarea>
    </div>
  )
}

export default Editor;
