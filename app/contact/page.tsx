'use client'

import { useState } from 'react'
import { Mail, Linkedin, Briefcase } from 'lucide-react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      inquiry: formData.get('inquiry'),
      message: formData.get('message'),
    }

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      setSuccess(true)
      e.currentTarget.reset()
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <main className="bg-gray-50 min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          <p className="text-sm uppercase tracking-widest text-teal-600 mb-4">
            Connect
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s build something significant.
          </h1>

          <p className="text-gray-600 mb-10 max-w-md">
            Whether you need a custom research report, a robust financial model,
            or strategic consulting, I'm here to help.
          </p>

          {/* CONTACT BLOCKS */}
          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-xl">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-semibold">Email directly</p>
                <p className="text-gray-500 text-sm">
                  contact@finnexuslab.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-xl">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="font-semibold">Professional Network</p>
                <p className="text-gray-500 text-sm">
                  linkedin.com/in/finnexuslab
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-200 p-3 rounded-xl">
                <Briefcase size={18} />
              </div>
              <div>
                <p className="font-semibold">Consulting Hours</p>
                <p className="text-gray-500 text-sm">
                  Mon - Fri: 10:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Row */}
            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Business Email"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Inquiry Type */}
            <select
              name="inquiry"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>Market Research Mandate</option>
              <option>Financial Modeling</option>
              <option>Strategic Consulting</option>
              <option>Other</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Tell me about your project or inquiry..."
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A2B3C] text-white py-4 rounded-xl text-sm font-medium hover:bg-[#142230] transition"
            >
              {loading ? 'Sending...' : 'Send Inquiry →'}
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-green-600 text-sm">
                Inquiry sent successfully.
              </p>
            )}

          </form>

        </div>

      </section>

    </main>
  )
}