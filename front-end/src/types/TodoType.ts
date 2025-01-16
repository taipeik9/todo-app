import { Dayjs } from "dayjs";

export type todoType = {
  id: string;
  name: string;
  date: Dayjs;
  completed: boolean;
  comment: string | null;
};
