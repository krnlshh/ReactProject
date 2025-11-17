import { useState } from 'react'

function Exercise1_R1() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <h4 className="font-bold text-green-900 mb-2">⚛️ React-Specific Exercise:</h4>
        <p className="text-green-800">Build a classic counter component</p>
      </div>

      <div className="bg-white border-2 border-green-500 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg text-center">
            <p className="text-white text-lg mb-2">Count</p>
            <p className="text-white text-6xl font-bold">{count}</p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold text-xl"
            >
              −
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 font-semibold"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold text-xl"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h4 className="font-bold text-yellow-900 mb-2">💡 Why This Matters:</h4>
        <p className="text-yellow-800 text-sm">
          Counter is the "Hello World" of React! It teaches state updates, re-rendering, and event handlers.
        </p>
      </div>
    </div>
  )
}

export default Exercise1_R1

