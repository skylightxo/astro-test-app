import React from 'react';
import { Todo } from './Todo';
import { useStore } from 'nanostores/react';
import { status } from '../constants';
import { tasks as storeTasks, addTask } from '../store';

export const TodoList = () => {
    const tasks = useStore(storeTasks);
    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        console.log('new input value is: ', inputValue)
    }, [inputValue])

    return (
        <div>
            <div>
                <p>React version, add todo:</p>
                <input onChange={(event) => setInputValue(event.target.value)} type="text" />
                <button onClick={() => addTask({name: inputValue, status: status.ongoing})} type="submit">React Submit</button>
            </div>
            <ul>
                {tasks.map((task) => <Todo name={task.name} status={task.status} />)}
            </ul>
        </div>
    )
}