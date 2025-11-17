import { useState } from 'react'

function Exercise1_1() {
  const [firstName, setFirstName] = useState('John')

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">
          Declare a variable <code className="bg-blue-100 px-2 py-1 rounded">firstName</code> using useState and display it.
          Add an input to change the value.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Your JavaScript (before React):</h4>
        <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`let firstName = "John"
console.log(firstName)  // John`}
        </pre>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-900 mb-3">React Version (with useState):</h4>
        <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`const [firstName, setFirstName] = useState('John')

// Display the value
<p>Current name: {firstName}</p>

// Update the value
<input 
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
/>`}
        </pre>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">🎯 Interactive Demo:</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name:
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Current value:</p>
            <p className="text-2xl font-bold text-indigo-600">{firstName}</p>
          </div>

          <button
            onClick={() => setFirstName('John')}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Reset to "John"
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h4 className="font-bold text-yellow-900 mb-2">💡 Key Concepts:</h4>
        <ul className="text-yellow-800 text-sm space-y-1">
          <li>• <strong>useState</strong> is React's way to create variables that can change</li>
          <li>• Returns array: [value, setter function]</li>
          <li>• When state changes, React re-renders the component</li>
          <li>• Always use setter function (setFirstName) to update state</li>
        </ul>
      </div>
    </div>
  )
}

export default Exercise1_1

