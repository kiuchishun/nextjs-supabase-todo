"use client";

import { useState } from "react";
import { createTodo } from "../actions/createTodo";
import { useActionState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState<string>("");

  const [state, createTodoAction] = useActionState(createTodo, { msg: "" });
  return (
    <form
      action={async (formData) => {
        await createTodoAction(formData);
        setInputValue("");
      }}
    >
      <input
        value={inputValue}
        name="content"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button>追加</button>
      <div style={{ color: "red" }}>{state.msg}</div>
    </form>
  );
}
