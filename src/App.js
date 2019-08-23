import React from "react";
import TodoItems from "./components/TodoItems";
import AddItem from "./components/AddItem";
import { ItemProvider } from "./components/ItemContext";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>TodoList ONLY FUNCTIONAL COMPONENTS</h1>
      <ItemProvider>
        <TodoItems />
        <AddItem />
      </ItemProvider>
    </div>
  );
};

export default App;
