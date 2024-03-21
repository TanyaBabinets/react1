import React, { useEffect, useInsertionEffect, useState } from 'react';
import "./todo-list.css";
import TodoAdd from './todo-add';
import TodoFilter from './todo-filter';
import TodoItem from './todo-item';
import list from './data';
import { nanoid } from 'nanoid';


const TodoList = () => { 
    // добавление задач
    const [tasks, setTasks] = useState([]);//or list
    const [filter, setFilter] = useState('All');

    //get tasks from storage.....не забыть чистить localstorage при необходимости
    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")) || list);//или с хранилища, если пустое то пустой массив или заранее сделанный список list
    }, []);

    //сохранение задач to storage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

   
    const filterMap = {
        All: () => true,
        Done: (task) => task.done,
        ToDo: (task) => !task.done,
    }


    const addTask = (title) => {
        setTasks([...tasks, {
            id: nanoid(),
            title,
            done: false
        }])
    };
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    const toggleDone = (id) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }
            return task;
        })
        setTasks(newTasks);
    }
    const updateTask = (id, title) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, title }
            }
            return task;
        })
        setTasks(newTasks);
    }
    return (
        <div className='container'>
            <h1>ToDo List</h1>
            <div className='todo-list'>
                <TodoAdd addTask={addTask} />
                <TodoFilter setFilter={setFilter} filterMap={filterMap} activeFilter={filter} />

                <div>
                    {tasks.filter(filterMap[filter]).map((task) => (
                        <TodoItem {...task}
                            removeTask={removeTask}
                            toggleDone={toggleDone}
                            updateTask={updateTask}
                            key={task.id}
                        />))}

                </div>
            </div>
        </div>


    );
}

export default TodoList;
