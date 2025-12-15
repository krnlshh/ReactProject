import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset, selectCount } from '../redux/slices/counterSlice'
import { useState } from 'react'

/**
 * 🎯 REDUX EXAMPLE 1: Counter App
 * 
 * This demonstrates:
 * - useSelector: Reading state from Redux store
 * - useDispatch: Dispatching actions to update state
 * - Action creators: Functions that create action objects
 * - Basic Redux flow: Component → Dispatch → Action → Reducer → State → Component
 * 
 * Learning Points:
 * 1. useSelector subscribes component to Redux store
 * 2. useDispatch gives you access to dispatch function
 * 3. Actions are dispatched to update state
 * 4. Reducers handle actions and return new state
 * 5. Components re-render when their selected state changes
 */

const ReduxCounterPage = () => {
  // Read state from Redux store
  const count = useSelector(selectCount)
  
  // Get dispatch function to send actions
  const dispatch = useDispatch()
  
  const [amount, setAmount] = useState(5)

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Redux Counter Example</h3>
            </div>
            <div className="card-body text-center">
              <h1 className="display-1 mb-4">{count}</h1>
              
              <div className="d-flex gap-2 justify-content-center mb-3">
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(increment())}
                >
                  +1 Increment
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(decrement())}
                >
                  -1 Decrement
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(reset())}
                >
                  Reset
                </button>
              </div>

              <div className="mt-4">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Enter amount"
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(incrementByAmount(amount))}
                  >
                    Increment by {amount}
                  </button>
                </div>
              </div>

              <div className="mt-4 p-3 bg-light rounded">
                <h5>How it works:</h5>
                <ol className="text-start">
                  <li>Click buttons to dispatch actions</li>
                  <li>Actions are sent to Redux store</li>
                  <li>Reducer processes actions and updates state</li>
                  <li>Component re-renders with new state</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReduxCounterPage

