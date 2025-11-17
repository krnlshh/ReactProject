import { useState } from 'react'

function Exercise1_6() {
  const [city, setCity] = useState('Ahmedabad')

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">Reassign/update a state variable</p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <div className="space-y-4">
          <p className="text-lg">Current city: <strong className="text-indigo-600">{city}</strong></p>
          
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setCity('Mumbai')} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Mumbai
            </button>
            <button onClick={() => setCity('Delhi')} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Delhi
            </button>
            <button onClick={() => setCity('Bangalore')} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Bangalore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercise1_6

