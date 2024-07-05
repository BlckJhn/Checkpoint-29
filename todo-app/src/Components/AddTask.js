import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === '') {
      setError('Task description cannot be empty.');
      return;
    }
    dispatch(addTask({ id: Date.now(), description, isDone: false }));
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddTask;
