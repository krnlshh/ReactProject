import { useState } from 'react'

function Exercise1_5() {
  const [city, setCity] = useState('Ahmedabad')
  const [country] = useState('India')
  const [isStudent, setIsStudent] = useState(true)

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">
          Create multiple state variables: city, country, isStudent (boolean)
        </p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-4">🎯 Interactive Demo:</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City:
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Country (constant):</p>
            <p className="text-xl font-bold text-gray-800">{country}</p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
              className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
            />
            <label className="ml-2 text-gray-700">
              Are you a student?
            </label>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-900 mb-2">Summary:</h5>
            <p className="text-indigo-800">
              I live in <strong>{city}, {country}</strong> and I am {isStudent ? '' : 'not '}a student.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h4 className="font-bold text-yellow-900 mb-2">💡 Key Concept:</h4>
        <p className="text-yellow-800 text-sm">
          You can have multiple useState hooks in one component! Each manages independent state.
        </p>
      </div>
    </div>
  )
}

export default Exercise1_5

