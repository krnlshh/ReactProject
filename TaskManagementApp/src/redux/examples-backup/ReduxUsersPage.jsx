import { useSelector, useDispatch } from 'react-redux'
import {
  fetchUsers,
  fetchUserById,
  selectUser,
  clearError,
  selectUsersLoading,
  selectUsersError,
  selectAllUsers,
  selectSelectedUser,
} from '../redux/slices/usersSlice'
import { useEffect } from 'react'

/**
 * 🎯 REDUX EXAMPLE 3: Users App (Async Operations)
 * 
 * This demonstrates:
 * - Async operations with createAsyncThunk
 * - Loading states
 * - Error handling
 * - Normalized state structure
 * - Extra reducers for async actions
 * 
 * Learning Points:
 * 1. createAsyncThunk handles async operations
 * 2. Three states: pending, fulfilled, rejected
 * 3. Loading and error states in Redux
 * 4. Normalized state for better performance
 * 5. useEffect for side effects (fetching data)
 */

const ReduxUsersPage = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const loading = useSelector(selectUsersLoading)
  const error = useSelector(selectUsersError)
  const selectedUser = useSelector(selectSelectedUser)

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleFetchUsers = () => {
    dispatch(fetchUsers())
  }

  const handleSelectUser = (userId) => {
    dispatch(selectUser(userId))
    // Fetch user details if not already loaded
    if (!selectedUser || selectedUser.id !== userId) {
      dispatch(fetchUserById(userId))
    }
  }

  const handleClearError = () => {
    dispatch(clearError())
  }

  if (loading && users.length === 0) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading users...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
              <h3 className="mb-0">Users List</h3>
              <button
                className="btn btn-sm btn-light"
                onClick={handleFetchUsers}
                disabled={loading}
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger alert-dismissible fade show">
                  <strong>Error:</strong> {error}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClearError}
                  ></button>
                </div>
              )}

              {users.length === 0 && !loading ? (
                <p className="text-muted">No users found</p>
              ) : (
                <ul className="list-group">
                  {users.map((user) => (
                    <li
                      key={user.id}
                      className={`list-group-item list-group-item-action ${
                        selectedUser?.id === user.id ? 'active' : ''
                      }`}
                      onClick={() => handleSelectUser(user.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div>
                        <strong>{user.name}</strong>
                        <br />
                        <small className="text-muted">{user.email}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              <h3 className="mb-0">User Details</h3>
            </div>
            <div className="card-body">
              {selectedUser ? (
                <div>
                  <h4>{selectedUser.name}</h4>
                  <p className="text-muted">@{selectedUser.username}</p>
                  <hr />
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedUser.phone}
                  </p>
                  <p>
                    <strong>Website:</strong>{' '}
                    <a
                      href={`https://${selectedUser.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedUser.website}
                    </a>
                  </p>
                  <hr />
                  <h5>Address</h5>
                  <p>
                    {selectedUser.address.street}, {selectedUser.address.city}
                    <br />
                    {selectedUser.address.zipcode}
                  </p>
                  <h5>Company</h5>
                  <p>
                    <strong>{selectedUser.company.name}</strong>
                    <br />
                    <em>{selectedUser.company.catchPhrase}</em>
                  </p>
                </div>
              ) : (
                <p className="text-muted">Select a user to see details</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0">Learning Points</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <strong>createAsyncThunk:</strong> Handles async operations
                  with pending/fulfilled/rejected states
                </li>
                <li>
                  <strong>Loading State:</strong> Track async operation status
                </li>
                <li>
                  <strong>Error Handling:</strong> Store and display errors from
                  API calls
                </li>
                <li>
                  <strong>Normalized State:</strong> Store users as{' '}
                  <code>{`{ [id]: user }`}</code> for easier updates
                </li>
                <li>
                  <strong>Extra Reducers:</strong> Handle async thunk actions in
                  slice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReduxUsersPage

