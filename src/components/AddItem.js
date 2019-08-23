import React, { useState, useContext } from "react";
import { ItemContext } from "./ItemContext";
import Input from "@material-ui/core/Input";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  // eslint-disable-next-line
  const [items, setItems] = useContext(ItemContext);

  const updateTitle = e => {
    setTitle(e.target.value);
  };
  const updateAuthor = e => {
    setAuthor(e.target.value);
  };

  const updateDescription = e => {
    setDescription(e.target.value);
  };

  const AddItem = e => {
    e.preventDefault();
    setItems(prevItems => [
      ...prevItems,
      { title: title, author: author, description: description }
    ]);
  };

  return (
    <form onSubmit={AddItem}>
      <Input
        placeholder="Title"
        type="text"
        name="title"
        value={title}
        onChange={updateTitle}
      />
      <Input
        placeholder="Author"
        type="text"
        name="author"
        value={author}
        onChange={updateAuthor}
      />
      <Input
        placeholder="Title"
        type="text"
        name="description"
        value={description}
        onChange={updateDescription}
      />
      <button className="superButton" variant="contained">
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
