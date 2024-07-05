
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../actions/taskActions';
import styles from './Task.module.css';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (description.trim() === '') {
      setError('Task description cannot be empty.');
      return;
    }
    dispatch(editTask(task.id, { description }));
    setIsEditing(false);
    setError('');
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div className={styles.task}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={handleToggle}>
            {task.isDone ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Task;
