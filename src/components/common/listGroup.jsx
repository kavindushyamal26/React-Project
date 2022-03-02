import React from "react";

const ListGroup = (props) => {
  //console.log("color", props);
  const { counters, selectedItem, onItemSelect } = props;

  return (
    <ul className="list-group">
      <li
        onClick={() => onItemSelect("All")}
        className={
          selectedItem === "All" ? "list-group-item active" : "list-group-item"
        }
      >
        All
      </li>
      <li
        onClick={() => onItemSelect("Red")}
        className={
          selectedItem === "Red" ? "list-group-item active" : "list-group-item"
        }
      >
        Red
      </li>
      <li
        onClick={() => onItemSelect("Green")}
        className={
          selectedItem === "Green"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        Green
      </li>
      <li
        onClick={() => onItemSelect("Yellow")}
        className={
          selectedItem === "Yellow"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        Yellow
      </li>
    </ul>
    // <ul class="list-group">
    //   {counters.map((counter) => (
    //     <li class="list-group-item">{counter.color}</li>
    //   ))}
    // </ul>
  );
};

export default ListGroup;
