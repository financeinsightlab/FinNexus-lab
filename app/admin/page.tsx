'use client'

import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const [leads, setLeads] = useState<any[]>([])

  // 🔐 Check password
  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthorized(true)
    } else {
      alert('Wrong password')
    }
  }

  // 📥 Fetch leads
  useEffect(() => {
    if (authorized) {
      fetch('/api/leads')
        .then((res) => res.json())
        .then((data) => setLeads(data))
    }
  }, [authorized])

  // 🔐 LOGIN SCREEN
  if (!authorized) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 border rounded-xl">

          <h2 className="text-xl font-semibold mb-4">
            Admin Login
          </h2>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4 py-2 w-full mb-4"
          />

          <button
            onClick={handleLogin}
            className="bg-[#1A2B3C] text-white px-4 py-2 w-full"
          >
            Login
          </button>

        </div>
      </main>
    )
  }

  // 📊 DASHBOARD
  return (
    <main className="bg-gray-50 min-h-screen px-6 py-20">

      <h1 className="text-3xl font-semibold mb-10">
        Lead Dashboard
      </h1>

      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Inquiry</th>
              <th className="px-6 py-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>

            {leads.map((lead, i) => (
              <tr key={i} className="border-t">

                <td className="px-6 py-4">{lead.name}</td>
                <td className="px-6 py-4">{lead.email}</td>
                <td className="px-6 py-4">{lead.inquiry}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(lead.createdAt).toLocaleString()}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </main>
  )
}