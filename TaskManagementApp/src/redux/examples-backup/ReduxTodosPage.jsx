import { useSelector, useDispatch } from 'react-redux'
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setFilter,
  clearCompleted,
  selectFilteredTodos,
  selectFilter,
  selectTodosCount,
} from '../redux/slices/todosSlice'
import { useState } from 'react'

/**
 * 🎯 REDUX EXAMPLE 2: Todo App
 * 
 * This demonstrates:
 * - Complex state management
 * - Multiple actions
 * - Filtering logic
 * - Array operations (add, update, delete)
 * - Computed selectors
 * 
 * Learning Points:
 * 1. Multiple actions in one slice
 * 2. Updating arrays immutably (handled by Immer)
 * 3. Filtering state in selectors
 * 4. Derived state from selectors
 */

const ReduxTodosPage = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectFilteredTodos)
  const filter = useSelector(selectFilter)
  const counts = useSelector(selectTodosCount)
  
  const [newTodo, setNewTodo] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()))
      setNewTodo('')
    }
  }

  const handleEdit = (id, currentText) => {
    setEditingId(id)
    setEditText(currentText)
  }

  const handleSaveEdit = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText.trim() }))
      setEditingId(null)
      setEditText('')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h3 className="mb-0">Redux Todo App</h3>
            </div>
            <div className="card-body">
              {/* Add Todo */}
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new todo..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                />
                <button className="btn btn-primary" onClick={handleAddTodo}>
                  Add Todo
                </button>
              </div>

              {/* Filter Buttons */}
              <div className="btn-group mb-3" role="group">
                <button
                  className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => dispatch(setFilter('all'))}
                >
                  All ({counts.total})
                </button>
                <button
                  className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => dispatch(setFilter('active'))}
                >
                  Active ({counts.active})
                </button>
                <button
                  className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => dispatch(setFilter('completed'))}
                >
                  Completed ({counts.completed})
                </button>
              </div>

              {/* Clear Completed */}
              {counts.completed > 0 && (
                <button
                  className="btn btn-warning btn-sm mb-3"
                  onClick={() => dispatch(clearCompleted())}
                >
                  Clear Completed
                </button>
              )}

              {/* Todo List */}
              <ul className="list-group">
                {todos.length === 0 ? (
                  <li className="list-group-item text-center text-muted">
                    No todos found
                  </li>
                ) : (
                  todos.map((todo) => (
                    <li
                      key={todo.id}
                      className={`list-group-item d-flex justify-content-between align-items-center ${
                        todo.completed ? 'bg-light' : ''
                      }`}
                    >
                      {editingId === todo.id ? (
                        <div className="d-flex gap-2 flex-grow-1">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') handleSaveEdit(todo.id)
                              if (e.key === 'Escape') handleCancelEdit()
                            }}
                            autoFocus
                          />
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() => handleSaveEdit(todo.id)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="flex-grow-1">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              checked={todo.completed}
                              onChange={() => dispatch(toggleTodo(todo.id))}
                            />
                            <span
                              style={{
                                textDecoration: todo.completed
                                  ? 'line-through'
                                  : 'none',
                                opacity: todo.completed ? 0.6 : 1,
                              }}
                            >
                              {todo.text}
                            </span>
                          </div>
                          <div>
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              onClick={() => handleEdit(todo.id, todo.text)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReduxTodosPage

