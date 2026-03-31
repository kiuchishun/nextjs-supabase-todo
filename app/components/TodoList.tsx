import type { FilterType } from "../lib/types";
import TodoItem from "./TodoItem";
import { supabase } from "../lib/supabase";
type Props = {
  currentFilter: FilterType;
};
const TodoList = async ({ currentFilter }: Props) => {
  const { data: todos, error } = await supabase
    .from("todos")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.log(error);
    return <div>エラーが発生</div>;
  }
  if (!todos) {
    return <div>データなし</div>;
  }
  return todos
    .filter((todo) => {
      if (currentFilter === "completed") return todo.completed;
      if (currentFilter === "incompleted") return !todo.completed;
      return true;
    })
    .map((todo) => {
      return <TodoItem todo={todo} key={todo.id} />;
    });
};
export default TodoList;
