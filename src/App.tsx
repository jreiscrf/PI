import React from "react";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input type="text" placeholder="Type something" value="Hello World" />
      </header>
    </div>
  );
}

export default App;
