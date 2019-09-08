import React from "react";
import AceEditor from "react-ace";
import "brace/theme/solarized_light";

function onChange() {}

function Editor() {
  return (<AceEditor
      theme="solarized_light"
      onChange={onChange}
      name="editor"
      fontSize={16}
      width="80%"
      height="65vh"
      style={{
        marginBottom: "1em",
        marginTop: "1em",
        marginLeft: "10%",
        marginRight: "10%",
      }}
      editorProps={{ $blockScrolling: true }}
    />);
}

export default Editor;