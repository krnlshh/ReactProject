import { useState } from 'react'

function Exercise1_3() {
  const [value, setValue] = useState(2000)

  const tryReassign = () => {
    alert('In React, you use the setter function to update state, not direct assignment!')
  }

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">
          In JS, trying to reassign a const gives error. In React, you always use setter functions!
        </p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <div className="bg-red-50 p-4 rounded mb-4">
          <p className="text-red-800 font-mono text-sm">
            ❌ birthYear = 1990 // Error: Assignment to constant variable
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded mb-4">
          <p className="text-green-800 font-mono text-sm">
            ✅ setValue(1990) // Correct way in React
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg">Current value: <strong>{value}</strong></p>
          
          <button
            onClick={() => setValue(1990)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mr-2"
          >
            ✅ Update with Setter (Correct)
          </button>
          
          <button
            onClick={tryReassign}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            ❌ Try Direct Assignment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Exercise1_3

