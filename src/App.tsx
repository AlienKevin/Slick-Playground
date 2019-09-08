import React from "react";
import Editor from "./components/editor";
import Console from "./components/console";
import Header from "./components/header";

function App() {
  return (
    <div
      style={{
        marginTop: "0",
      }}>
      <Header/>
      <Editor/>
      <Console/>
    </div>
  );
}

// Render editor
export default App;
