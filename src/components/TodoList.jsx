import React from 'react';
import { Todo } from './Todo';
import { useStore } from 'nanostores/react';
import { tasks as storeTasks, addTask } from '../store';

export const TodoList = () => {
    const tasks = useStore(storeTasks);

    return (
        <div>
            <ul>
                {tasks.map((task, idx) => <Todo key={idx} name={task.name} status={task.status} />)}
            </ul>
        </div>
    )
}