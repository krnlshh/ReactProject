import { useReducer, useState } from "react"

const initialState = {
  toDoArray: [],
  nextId: 1
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_DO': 
      return {
        toDoArray: [...state.toDoArray, {
          id: state.nextId,
          text: action.text,
          completed: false
        }],
        nextId: state.nextId + 1
      }
    
    case 'DELETE_TO_DO': 
      return {
        toDoArray: state.toDoArray.filter((item) => item.id !== action.id),
        nextId: state.nextId 
      }
    
    case 'TOGGLE_TO_DO': 
      return {
        toDoArray: state.toDoArray.map((item) => 
          item.id === action.id ? {...item, completed: !item.completed} : item
        ),
        nextId: state.nextId
      }
    
    default: 
      return state
  }
}

const UseReducerPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch({type: 'ADD_TO_DO', text: text});
      setText('');
    }
  }

  const handleDelete = (id) => {
    dispatch({type: 'DELETE_TO_DO', id: id});
  }

  const handleToggle = (id) => {
    dispatch({type: 'TOGGLE_TO_DO', id: id});
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">✅ useReducer Todo List</h3>
            </div>
            <div className="card-body">
              {/* Input Section */}
              <div className="input-group mb-4">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter a task..." 
                  value={text} 
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                />
                <button 
                  className="btn btn-success" 
                  onClick={handleAdd}
                >
                  ADD TASK
                </button>
              </div>

              {/* Todo List */}
              {state.toDoArray.length === 0 ? (
                <div className="alert alert-info text-center">
                  No tasks yet! Add one above.
                </div>
              ) : (
                <ul className="list-group">
                  {state.toDoArray.map((item) => (
                    <li 
                      key={item.id} 
                      className={`list-group-item d-flex justify-content-between align-items-center ${
                        item.completed ? 'bg-light' : ''
                      }`}
                    >
                      <span 
                        style={{
                          textDecoration: item.completed ? 'line-through' : 'none',
                          opacity: item.completed ? 0.6 : 1,
                          cursor: 'pointer'
                        }}
                        onClick={() => handleToggle(item.id)}
                      >
                        {item.completed ? '✓ ' : '⭕ '}
                        {item.text}
                      </span>
                      <div>
                        <button 
                          className={`btn btn-sm me-2 ${
                            item.completed ? 'btn-warning' : 'btn-success'
                          }`}
                          onClick={() => handleToggle(item.id)}
                        >
                          {item.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button 
                          className="btn btn-sm btn-danger" 
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Stats */}
              {state.toDoArray.length > 0 && (
                <div className="mt-3 text-muted">
                  <small>
                    Total: {state.toDoArray.length} | 
                    Completed: {state.toDoArray.filter(t => t.completed).length} | 
                    Pending: {state.toDoArray.filter(t => !t.completed).length}
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseReducerPractice