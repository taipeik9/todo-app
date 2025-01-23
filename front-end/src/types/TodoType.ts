import { Dayjs } from "dayjs";

export type TodoType = {
  id: string;
  name: string;
  date: Dayjs;
  completed: boolean;
  comment: string | null;
};

export type ProjectType = {
  id: string;
  name: string;
  todos: TodoType[];
};
