import Form from "./components/Form";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import normalizeFilter from "./lib/filter";

type Props = {
  searchParams: Promise<{filter?:string}>;
  };

export default async function Home({ searchParams }: Props) {
  const {filter} = await searchParams;
  const currentFilter = normalizeFilter(filter);

  return (
    <div className="app">
      <h1>todoリスト serverAciton json-server</h1>

      <TodoFilter currentFilter={currentFilter}/>
      <TodoList currentFilter={currentFilter} />
      <Form />
    </div>
  );
}
