import React, { useContext } from "react";
import Item from "./Item";
import { ItemContext } from "./ItemContext";

const TodoItems = () => {
  // eslint-disable-next-line
  const [items, setItems] = useContext(ItemContext);
  return (
    <div className="flexIT">
      {items.map(item => (
        <Item
          key={item.title}
          title={item.title}
          author={item.author}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default TodoItems;
