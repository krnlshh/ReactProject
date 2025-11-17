import { Link } from 'react-router-dom'

function Challenge2() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Challenge 2: Todo List</h1>
        <Link to="/" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">← Back</Link>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h3 className="font-bold text-yellow-900 mb-2">🚧 Coming Soon!</h3>
        <p className="text-yellow-800">Complete Challenge 1 first, then this will be ready!</p>
      </div>
      <Link to="/challenge1" className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">← Challenge 1</Link>
    </div>
  )
}

export default Challenge2

