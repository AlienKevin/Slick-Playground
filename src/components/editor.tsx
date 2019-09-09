import React from "react";
import AceEditor from "react-ace";
import "brace/theme/solarized_light";
import { Runner } from "slick-lang";

const runner: Runner = new Runner(true);

class Editor extends React.Component<{getOutput: (output: string) => void}, {}>{
  private value: string = ""
  onChange = (source: string) => {
    this.value = source;
    setTimeout(() => {
    let outputs = "";
    const oldConsoleLog = console["log"];
    console["log"] = (output: string) => (outputs += output + "\n");
    runner.run(source, true);
    console["log"] = oldConsoleLog;
    outputs = outputs.trimRight(); // remove extra trailing newlines
    this.props.getOutput(outputs);
    }, 500);
  }
  render = () => {
    return (<AceEditor
        theme="solarized_light"
        onChange={this.onChange}
        value={this.value}
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
}

export default Editor;