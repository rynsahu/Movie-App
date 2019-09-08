import React from "react";

const ListGroup = ({ items, onItemSelect, valueProperty, textProperty, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={ item === selectedItem ? "list-group-item active" : "list-group-item" }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default ListGroup;
