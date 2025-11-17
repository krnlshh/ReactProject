import { useState } from 'react'

function Exercise1_10() {
  const [a, setA] = useState(5)
  const [b, setB] = useState(10)

  const swap = () => {
    const temp = a
    setA(b)
    setB(temp)
  }

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">Swap two state variables</p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="flex gap-4 justify-center">
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <p className="text-sm text-blue-600">Variable A</p>
              <p className="text-3xl font-bold text-blue-900">{a}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg text-center">
              <p className="text-sm text-purple-600">Variable B</p>
              <p className="text-3xl font-bold text-purple-900">{b}</p>
            </div>
          </div>

          <button
            onClick={swap}
            className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 font-semibold"
          >
            🔄 Swap Values
          </button>
        </div>
      </div>
    </div>
  )
}

export default Exercise1_10

