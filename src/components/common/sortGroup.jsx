import React from "react";

const SortGroup = (props) => {
  const { counters, onSort } = props;
  return (
    <ul className="list-group">
      <li
        className="list-group-item"
        onClick={() => onSort("color")}
        // className={
        //   selectedItem === "Colors"
        //     ? "list-group-item active"
        //     : "list-group-item"
        // }
      >
        Colors
      </li>
      <li
        className="list-group-item"
        onClick={() => onSort("Numbers")}
        // className={
        //   selectedItem === "Numbers"
        //     ? "list-group-item active"
        //     : "list-group-item"
        // }
      >
        Numbers
      </li>
    </ul>
  );
};

export default SortGroup;
