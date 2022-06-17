import React from "react";
import TodoItem from "./TodoItem";
import "./index.css";

export default function TodoList(props) {
  const { todoList, showPop, deleteItem, checkItem } = props;
  return (
    <div className="todolist-wrapper">
      <div className="todo-list">
        {todoList.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.token}
              {...todoItem}
              showPop={showPop}
              deleteItem={deleteItem}
              checkItem={checkItem}
            />
          );
        })}
      </div>
    </div>
  );
}
