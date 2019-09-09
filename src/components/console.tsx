import React from 'react';
import AceEditor from 'react-ace';
import "brace/theme/solarized_dark";

class Console extends React.Component<{output: string}, {}> {
  render() {
    return (<AceEditor
        theme="solarized_dark"
        name="editor"
        fontSize={16}
        style = {{
          marginLeft: "10%",
          marginRight: "10%",
        }}
        width="80%"
        height="23vh"
        editorProps={{ $blockScrolling: true }}
        readOnly={true}
        showGutter={false}
        showPrintMargin={false}
        highlightActiveLine={false}
        onLoad={(editor) => {
          editor.renderer.$cursorLayer.element.style.display = "none";
        }}
        value={this.props.output}
      />);
  }
}

export default Console;