import { createStore, getValue } from "nanostores";
import { status } from "../constants";

const tasks = createStore(() => {
  tasks.set([
    {
      name: "Initial task",
      status: status.ongoing,
    },
    {
      name: "Clean the dishes",
      status: status.done,
    },
    {
      name: "Check out Astro",
      status: status.ongoing,
    },
  ]);
});

const addTask = function addTask(task) {
  tasks.set([...getValue(tasks), task]);
};

export { tasks, addTask };
