import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { addToDo, removeToDo, toggleToDo } from '../features/todoSlice';

const TodoList: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addToDo(text));
      setText('');
    }
  };

  const handleToggle = (id: number) => {
    dispatch(toggleToDo(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeToDo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map
        ((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;