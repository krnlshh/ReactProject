import { useState } from 'react'

function Exercise1_R2() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="space-y-4">
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
        <h4 className="font-bold text-green-900 mb-2">⚛️ React-Specific Exercise:</h4>
        <p className="text-green-800">Build a toggle switch component</p>
      </div>

      <div className="bg-white border-2 border-green-500 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl">{isOn ? '💡' : '🌙'}</span>
            <div
              onClick={() => setIsOn(!isOn)}
              className={`w-20 h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                isOn ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
                  isOn ? 'translate-x-10' : 'translate-x-0'
                }`}
              />
            </div>
            <span className="text-lg font-semibold">{isOn ? 'ON' : 'OFF'}</span>
          </div>

          <div className={`p-6 rounded-lg text-center transition-all ${
            isOn ? 'bg-yellow-100' : 'bg-gray-800 text-white'
          }`}>
            <p className="text-2xl">
              {isOn ? '☀️ The light is ON!' : '🌙 The light is OFF'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <h4 className="font-bold text-yellow-900 mb-2">💡 Toggle Pattern:</h4>
        <p className="text-yellow-800 text-sm">
          <code className="bg-yellow-100 px-1 rounded">setIsOn(!isOn)</code> is a common pattern for boolean toggles!
        </p>
      </div>
    </div>
  )
}

export default Exercise1_R2

