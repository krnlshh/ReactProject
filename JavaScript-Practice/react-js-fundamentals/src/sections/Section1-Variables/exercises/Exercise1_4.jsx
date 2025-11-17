import { useState } from 'react'

function Exercise1_4() {
  const [age, setAge] = useState(undefined)

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">Create state with undefined value, then set it</p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded">
            <p>Age value: <strong>{age === undefined ? 'undefined' : age}</strong></p>
            <p className="text-sm text-gray-600 mt-2">
              Type: {typeof age}
            </p>
          </div>

          <input
            type="number"
            value={age || ''}
            onChange={(e) => setAge(e.target.value ? Number(e.target.value) : undefined)}
            placeholder="Enter age"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            onClick={() => setAge(undefined)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Reset to undefined
          </button>
        </div>
      </div>
    </div>
  )
}

export default Exercise1_4

