export type Todo = {
  content: string;
  completed: boolean;
  id: string;
};

export type FilterType = "all"|"completed"|"incompleted"