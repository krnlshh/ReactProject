import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from '../redux/slices/todosSlice';
import { useState } from "react";

const ReduxTodosPage = () => {
    const toDos = useSelector((state) => state.toDo.toDoArray);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim() !== '') {
            dispatch(addItem(text));
            setText('');
        }
    }

    const deleteTask = (id) => {
        dispatch(deleteItem(id));
    }

    const toggleTask = (id) => {
        dispatch(updateItem(id));
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">✅ Redux Todo List</h3>
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
                            {toDos.length === 0 ? (
                                <div className="alert alert-info text-center">
                                    No tasks yet! Add one above.
                                </div>
                            ) : (
                                <ul className="list-group">
                                    {toDos.map((item) => (
                                        <li 
                                            key={item.id} 
                                            className={`list-group-item d-flex justify-content-between align-items-center ${
                                                item.complated ? 'bg-light' : ''
                                            }`}
                                        >
                                            <span 
                                                style={{
                                                    textDecoration: item.complated ? 'line-through' : 'none',
                                                    opacity: item.complated ? 0.6 : 1,
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => toggleTask(item.id)}
                                            >
                                                {item.complated ? '✓ ' : '⭕ '}
                                                {item.text}
                                            </span>
                                            <div>
                                                <button 
                                                    className={`btn btn-sm me-2 ${
                                                        item.complated ? 'btn-warning' : 'btn-success'
                                                    }`}
                                                    onClick={() => toggleTask(item.id)}
                                                >
                                                    {item.complated ? 'Undo' : 'Complete'}
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-danger" 
                                                    onClick={() => deleteTask(item.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Stats */}
                            {toDos.length > 0 && (
                                <div className="mt-3 text-muted">
                                    <small>
                                        Total: {toDos.length} | 
                                        Completed: {toDos.filter(t => t.complated).length} | 
                                        Pending: {toDos.filter(t => !t.complated).length}
                                    </small>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxTodosPage;