import React from "react";
import Editor from "./components/editor";
import Console from "./components/console";
import Header from "./components/header";

class App extends React.Component<{}, {
    output: string,
  }> {
  constructor(props: any) {
    super(props);
    this.state = {
      output: "",
    }
  }
  getOutput = (output: string) => {
    this.setState({"output": output});
  }
  render() {
    return (
      <div
        style={{
          marginTop: "0",
        }}>
        <Header />
        <Editor getOutput={this.getOutput}/>
        <Console output={this.state.output}/>
      </div>
    );
  }
}

// Render editor
export default App;
