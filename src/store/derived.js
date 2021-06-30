import { createDerived } from "nanostores";
import { tasks } from "./index";
import { status } from "../constants";

const completedTasks = createDerived(tasks, (list) =>
  list.filter((task) => task.status === status.done)
);

const ongoingTasks = createDerived(tasks, (list) =>
  list.filter((task) => task.status === status.ongoing)
);

export { completedTasks, ongoingTasks };
