import React, { useState } from 'react';
import "./add.css";

const TodoAdd = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState(null);
    const clickHandler = () => {
        if (title.trim().length === 0) {
            setTitleError('Заполните поле');
            return
        }
        addTask(title);
        setTitle('');
        setTitleError(null);
    }

    return (
        <div className='add'>

            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => { if (e.code === "Enter") clickHandler() }} />
            
            <button onClick={clickHandler}>Add</button>
            {titleError && <div className='red'>{titleError}</div>}
        </div>
    );
}

export default TodoAdd;
