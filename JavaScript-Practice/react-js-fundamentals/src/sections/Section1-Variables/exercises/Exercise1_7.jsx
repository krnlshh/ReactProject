import { useState } from 'react'

function Exercise1_7() {
  const [person, setPerson] = useState({ name: 'John', age: 35 })

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">Create state with an object</p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <div className="bg-indigo-50 p-4 rounded">
          <p>Name: <strong>{person.name}</strong></p>
          <p>Age: <strong>{person.age}</strong></p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-800 text-sm">
          💡 Objects in state work just like other values - you can store complex data!
        </p>
      </div>
    </div>
  )
}

export default Exercise1_7

