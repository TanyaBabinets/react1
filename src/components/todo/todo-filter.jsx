import classNames from 'classnames';
import React from 'react';
import "./todo-filter.css";
const TodoFilter = ({ setFilter, filterMap, activeFilter }) => {
    const filterKeys = Object.keys(filterMap);//['All', "Done", "ToDo"]
    return (
        <div className="filter-button">
            {filterKeys.map((filter) =>
            (<button key={filter}
                onClick={() =>setFilter(filter)}
                className={classNames({ active: filter === activeFilter })}>
                {filter}
            </button>))}
            
          {/* //  /* <button onClick={ ()=>setFilter("ToDo")}>ToDo</button>
         //   <button onClick={() => setFilter("Done")}>Done</button>
          //  <button onClick={() => setFilter("All")}>All</button> */ }
   </div>
    );
}

export default TodoFilter;
