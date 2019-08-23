import React from "react";
import Card from "@material-ui/core/Card";

const Item = ({ title, author, description }) => {
  return (
    <Card className="todoCard">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default Item;
