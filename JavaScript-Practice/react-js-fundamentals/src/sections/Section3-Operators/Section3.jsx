import { Link } from 'react-router-dom'

function Section3() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Section 3: Operators</h1>
        <Link to="/" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">← Back</Link>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-800">🚧 Coming Soon! Complete previous sections first.</p>
      </div>
    </div>
  )
}

export default Section3

