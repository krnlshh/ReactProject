import { Link } from 'react-router-dom'

function Home() {
  const sections = [
    { id: 1, name: 'Variables', desc: 'Learn useState, let, const, var in React', exercises: 10 },
    { id: 2, name: 'Data Types', desc: 'Primitive types & React state management', exercises: 10 },
    { id: 3, name: 'Operators', desc: 'Arithmetic, comparison, logical operators in React', exercises: 10 },
    { id: 4, name: 'Strings', desc: 'String manipulation with React UI', exercises: 10 },
    { id: 5, name: 'Conditionals', desc: 'Conditional rendering in React', exercises: 10 },
    { id: 6, name: 'Loops', desc: 'Map, filter, reduce in React', exercises: 10 },
    { id: 7, name: 'Functions', desc: 'Event handlers & function components', exercises: 10 },
    { id: 8, name: 'Arrays', desc: 'Array methods with React state', exercises: 10 },
    { id: 9, name: 'Objects', desc: 'Object manipulation in React', exercises: 10 },
    { id: 10, name: 'Destructuring', desc: 'Props & state destructuring', exercises: 10 },
  ]

  const challenges = [
    { id: 1, name: 'Calculator', desc: 'Build a functional calculator', difficulty: 'Easy' },
    { id: 2, name: 'Todo List', desc: 'CRUD operations with React', difficulty: 'Medium' },
    { id: 8, name: 'Form Validator', desc: 'Complete form validation system', difficulty: 'Medium' },
    { id: 10, name: 'Student Management', desc: 'Full CRUD mini project', difficulty: 'Hard' },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🚀 JavaScript Fundamentals in React
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Master JavaScript by building React components!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/section1"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Start Learning →
          </Link>
          <Link
            to="/challenge1"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Try Challenges 🎯
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-2">10</div>
          <div className="text-gray-600">Sections</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
          <div className="text-gray-600">Exercises</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
          <div className="text-gray-600">Big Challenges</div>
        </div>
      </div>

      {/* Sections */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map(section => (
            <Link
              key={section.id}
              to={`/section${section.id}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-indigo-500"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Section {section.id}: {section.name}
                </h3>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
                  {section.exercises} exercises
                </span>
              </div>
              <p className="text-gray-600 text-sm">{section.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Big Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map(challenge => (
            <Link
              key={challenge.id}
              to={`/challenge${challenge.id}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-green-500"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Challenge {challenge.id}: {challenge.name}
                </h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{challenge.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">✨ What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <span className="text-2xl mr-3">✅</span>
            <div>
              <h3 className="font-bold mb-1">JavaScript Fundamentals</h3>
              <p className="text-indigo-100 text-sm">Master core JavaScript concepts</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">⚛️</span>
            <div>
              <h3 className="font-bold mb-1">React Basics</h3>
              <p className="text-indigo-100 text-sm">useState, useEffect, components</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">🎨</span>
            <div>
              <h3 className="font-bold mb-1">Interactive UI</h3>
              <p className="text-indigo-100 text-sm">Build real, working interfaces</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">🚀</span>
            <div>
              <h3 className="font-bold mb-1">Hands-on Practice</h3>
              <p className="text-indigo-100 text-sm">Learn by building projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

