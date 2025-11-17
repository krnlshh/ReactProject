import { Link } from 'react-router-dom'

function Section2() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Section 2: Data Types</h1>
            <p className="text-gray-600 mt-2">Primitive types & React state management</p>
          </div>
          <Link
            to="/"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <h3 className="font-bold text-yellow-900 mb-2">🚧 Coming Soon!</h3>
          <p className="text-yellow-800">
            This section is being built. Complete Section 1 first, then check back!
          </p>
        </div>

        <div className="mt-6">
          <Link
            to="/section1"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            ← Go to Section 1
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section2

