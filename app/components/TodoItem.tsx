"use client";

import type { Todo } from "../lib/types";
import { deleteItem } from "../actions/deleteItem";
import { updateCompleted } from "../actions/updateCompleted";

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div
      style={{
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <form action={updateCompleted}>
        <input type="hidden" value={todo.id} name="id" />
        <input type="hidden" value={String(todo.completed)} name="completed" />

        <input 
        onChange={(e)=> e.currentTarget.form?.requestSubmit()}
        defaultChecked={todo.completed} type="checkbox"></input>
      </form>

      <span
        style={{
          fontSize: "20px",

          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.content}
      </span>
      {"　"}
      <form action={deleteItem}>
        <input type="hidden" value={todo.id} name="id" />

        <button>削除</button>
      </form>
    </div>
  );
};
export default TodoItem;
