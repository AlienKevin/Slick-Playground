import React from "react";
import AceEditor from "react-ace";
import "brace/theme/solarized_light";
import { Runner, RUN } from "slick-lang";

class Editor extends React.Component<{
    getOutput: (output: string) => void,
  }, {}>{
  private value: string = ""
  private outputTimers: number[] = [];
  private outputs = "";
  private output = (output: string) => this.outputs += output + "\n";
  private runner: Runner = new Runner({output: this.output});
  onChange = (source: string) => {
    this.value = replaceSymbolShorthands(source);
    setTimeout(() => {
      this.outputs = "";
      try {
        this.runner.run(source, { mode : RUN });
      } catch (ignore) {}
      this.outputs = this.outputs.trimRight(); // remove extra trailing newlines
      this.outputTimers.forEach(timer => {
        clearTimeout(timer);
      });
      this.outputTimers = [];
      if (this.outputs.startsWith("SyntaxError")) {
        this.outputTimers.push(setTimeout(() => {
          this.props.getOutput(this.outputs);
        }, 500) as any);
      } else {
        this.props.getOutput(this.outputs);
      }
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
        showPrintMargin={false}
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

function replaceSymbolShorthands(source: string) {
  return source
    .replace(/\\f/g, 'ƒ')
    .replace(/\/\\/g, '⋏')
    .replace(/\\\//g, '⋎')
    .replace(/\-\>/g, '→')
    .replace(/>=/g, '≥')
    .replace(/<=/g, '≤')
    .replace(/!=/g, '≠')
}

export default Editor;