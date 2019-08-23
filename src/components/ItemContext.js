import React, { useState, createContext } from "react";

export const ItemContext = createContext();

export const ItemProvider = props => {
  const [items, setItems] = useState([
    {
      title: "Walk the dog",
      author: "Ed Landa",
      description: "Dog must be walked everyday"
    },
    {
      title: "Walk the cat",
      author: "Edu Landa",
      description: "Cat must be walked everyday"
    },
    {
      title: "Walk the snake",
      author: "Eddy Landa",
      description: "Snake must be walked everyday"
    }
  ]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
