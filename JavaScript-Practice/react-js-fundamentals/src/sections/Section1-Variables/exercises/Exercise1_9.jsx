import { useState } from 'react'

function Exercise1_9() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h4 className="font-bold text-blue-900 mb-2">📝 Task:</h4>
        <p className="text-blue-800">Create form inputs with state (controlled components)</p>
      </div>

      <div className="bg-white border-2 border-indigo-500 p-6 rounded-lg">
        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="bg-gray-50 p-4 rounded">
            <h5 className="font-semibold mb-2">Current Values:</h5>
            <p className="text-sm">Username: {username || '(empty)'}</p>
            <p className="text-sm">Email: {email || '(empty)'}</p>
            <p className="text-sm">Password: {password ? '•'.repeat(password.length) : '(empty)'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercise1_9

