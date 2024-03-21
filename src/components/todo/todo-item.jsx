import classNames from 'classnames';
import React, { useState } from 'react';

const TodoItem = ({ title, done, id, removeTask, toggleDone, updateTask }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setnewTitle] = useState(title);
    
    const saveTask = (e) => {
        //проверка на пустое поле
        if (newTitle.trim().length === 0) { 
            setIsEdit(false);
            setnewTitle(title);
            return
        }

        if (e.code === 'enter') { 
            updateTask(id, newTitle);
            setIsEdit(false);
        }
    }
    const normalTemp = (
        <span className={classNames({ 'task-done': done })}
    onClick = {() => setIsEdit(true)} >
        {title} 
        </span>);
    
    const editTemp = <input onKeyDown={saveTask} value={newTitle}
        onChange={(e) => setnewTitle(e.target.value)} />


return (

    <div className="task-item">
        <input type="checkbox" defaultChecked={done} onClick={() => toggleDone(id)} />
        {isEdit ? editTemp : normalTemp}
        <button onClick={() => removeTask(id)}>Delete</button></div>

);
}

export default TodoItem;
