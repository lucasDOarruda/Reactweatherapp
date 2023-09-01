import React, { useState } from 'react';
import '../style.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { task: newTodo, dueDate }]);
      setNewTodo('');
      setDueDate('');
      setShowDatePicker(false); // Hide the date picker after adding a todo
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const calculateDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    const daysUntilDue = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysUntilDue;
  };

  return (
    <div className='Todolist'>
      <h2>Todo List</h2>
      <input
        className='placeholder1'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <div className="date-picker">
        <span
          onClick={() => setShowDatePicker(!showDatePicker)}
          className="calendar-icon"
        >
          📅
        </span>
        {showDatePicker && (
          <div className="date-picker-popover">
            <p>Select Due Date</p>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        )}
      </div>
      <button onClick={addTodo}>Add</button>

      <ul className='list'>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="todo-item">
              <div className="todo-content">
                <p>{todo.task}</p>
                <p className="due-date">
                  Due in {calculateDaysUntilDue(todo.dueDate)} days
                </p>
              </div>
              <button className='buttonremove' onClick={() => removeTodo(index)}>
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

