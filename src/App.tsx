import React, {useState} from 'react';
import './App.css';
import {Todolist} from './component/Todolist';
import {v1} from 'uuid';

export type FilteredType = 'all' | 'completed' | 'active'

function App() {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "TS", isDone: true }
    ])
    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilteredType>('all')

    let tasksForTodolists = tasks

    if (filter === 'active') {
        tasksForTodolists = tasks.filter(task => !task.isDone)
    }

    if (filter === 'completed') {
        tasksForTodolists = tasks.filter(task => task.isDone)
    }

    const changeFilter = (value: FilteredType) => {
        setFilter(value)
    }

    const addTasks = (title: string) => {
        let task = { id: v1(), title: title, isDone: true }
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    const changeTaskStatus = (id: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
    }

    return (
        <div className="App">
            <Todolist
                title={'City list'}
                tasks={tasksForTodolists}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTasks={addTasks}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
