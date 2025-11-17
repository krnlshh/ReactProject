import { useState } from 'react'

function Exercise1_8() {
  const [person, setPerson] = useState({ name: 'John', age: 35 })

  const updateAge = () => {
    setPerson({ ...person, age: 60 })
  }

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">Update a property of object state</p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded">
            <p>Name: <strong>{person.name}</strong></p>
            <p>Age: <strong>{person.age}</strong></p>
          </div>

          <button
            onClick={updateAge}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Update Age to 60
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-800 text-sm">
          💡 Use spread operator <code className="bg-yellow-100 px-1 rounded">...person</code> to keep other properties when updating!
        </p>
      </div>
    </div>
  )
}

export default Exercise1_8

