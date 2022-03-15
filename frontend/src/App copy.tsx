import React from "react";
import "./App.css";
import { Counter } from "./try/Counter";
import { TextField } from "./try/TextField";

// function App() {
const App: React.FC = () => {
  // Written as a function declaration
  // function Heading(): React.ReactNode {
  //   return <h1>My Website Heading</h1>
  // }

  function Heading({ title }: { title: string }) {
    return <h1>{title}</h1>;
  }
  // Written as a function expression
  // const OtherHeading: React.FC = () => <h1>My Website Heading</h1>

  return (
    <div className="App">
      <header className="App-header">
        <Heading title="My Title" />
        {/* <button onClick= {Heading}>hi</button> */}
        Hello
        <TextField
          text="Salam"
          person={{ firstName: " ", lastName: " " }}
          // handleChange={e => {
          //   e.
          // }}
        />
        <Counter>
          {(count, setCount) => (
            <div>
              {count}
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          )}
        </Counter>
      </header>
    </div>
  );
};

export default App;
