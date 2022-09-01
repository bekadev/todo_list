import React, {useState} from 'react';
import './App.css';
import {Todolist} from './component/Todolist';

export type FilteredType = 'all' | 'completed' | 'active'

function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "TS", isDone: true },
        { id: 4, title: "Angular", isDone: false },
        { id: 5, title: "ReactJS", isDone: false }
    ])
    const removeTask = (id: number) => {
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

    return (
        <div className="App">
            <Todolist title={'City list'} tasks={tasksForTodolists} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
