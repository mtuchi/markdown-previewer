import React from 'react';

const Editor = (props) => {
  return (
    <textarea onChange={props.update}></textarea>
  )
}

export default Editor;
