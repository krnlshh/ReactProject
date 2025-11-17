import { useState } from 'react'

function Exercise1_2() {
  const [birthYear] = useState(1993)

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">
          Declare a constant using useState (notice we don't provide a setter if we don't need to update it).
        </p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">🎯 Interactive Demo:</h4>
        
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Birth Year (constant):</p>
            <p className="text-3xl font-bold text-indigo-600">{birthYear}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">This value cannot be changed!</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h4 className="font-bold text-yellow-900 mb-2">💡 Key Concept:</h4>
        <p className="text-yellow-800 text-sm">
          Even though we use <code className="bg-yellow-100 px-1 rounded">const</code> in JavaScript, 
          useState allows updates. To make it truly constant, just don't use the setter function!
        </p>
      </div>
    </div>
  )
}

export default Exercise1_2

