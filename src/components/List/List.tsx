import React from "react";
import Button from "../Button/Button";

interface List {
  id: number;
  password: string;
  show: boolean;
  website: string;
}

interface ListProps {
  list: List[];
  onDelete: (id: number) => void;
  onShow: (id: number) => void;
}

const List: React.FC<ListProps> = ({ list, onDelete, onShow }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.show ? <p>{item.password}</p> : "******"}
          <Button onClick={() => onDelete(item.id)} text="Delete" />
          <Button onClick={() => onShow(item.id)} text="Show password" />
          <p>SITE : {item.website}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
