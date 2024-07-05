import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import TaskFilter from './Components/TaskFilter';
import './style.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Checkpoint:-To-Do List</h1>
        <AddTask />
        <TaskFilter />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
