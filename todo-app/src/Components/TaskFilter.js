import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../actions/taskActions';

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <div>
      <button onClick={() => handleFilterChange({ target: { value: 'all' } })}>All</button>
      <button onClick={() => handleFilterChange({ target: { value: 'done' } })}>Completed</button>
      <button onClick={() => handleFilterChange({ target: { value: 'not' } })}>Incomplete</button>
    </div>
  );
};

export default TaskFilter;
