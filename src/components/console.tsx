import React from 'react';
import AceEditor from 'react-ace';
import "brace/theme/solarized_dark";

function onChange() {}

function Console() {
  return (<AceEditor
      theme="solarized_dark"
      onChange={onChange}
      name="editor"
      fontSize={16}
      style = {{
      marginLeft: "10%",
      marginRight: "10%",
      }}
      width="80%"
      height="23vh"
      editorProps={{ $blockScrolling: true }}
    />);
}

export default Console;