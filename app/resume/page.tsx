'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ResumePage() {
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_RESUME_PASSWORD) {
      setAuthorized(true)
    } else {
      alert('Wrong password')
    }
  }

  // 🔐 LOCK
  if (!authorized) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl border w-[320px]">
          <h2 className="text-xl font-semibold mb-4">Resume Access</h2>

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
            View Resume
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto">

        {/* TOP BAR */}
        <div className="flex justify-between mb-6 px-4">
          <a href="/" className="text-sm text-gray-500">
            ← Back to Site
          </a>

          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="border px-4 py-2 text-sm rounded-md"
            >
              Print CV
            </button>

            <a
              href="/Sumit_Singh_Resume.pdf"
              download="Sumit_Singh_Resume.pdf"
              className="bg-teal-600 text-white px-4 py-2 text-sm rounded-md hover:bg-teal-500 transition"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#1A2B3C] text-white p-10 flex justify-between items-center">

            <div className="flex items-center gap-6">

              {/* IMAGE FIXED */}
              <div className="w-[90px] h-[90px] relative">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile"
                  fill
                  sizes="90px"
                  className="rounded-xl object-cover"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl font-semibold tracking-tight">
                  Sumit Singh
                </h1>

                <p className="text-teal-400 text-sm mt-1 tracking-wide">
                  Financial Intelligence & Strategy Specialist
                </p>
              </div>

            </div>

            <div className="text-sm text-gray-300 text-right space-y-1">
              <p>📍 India</p>
              <p>📧 sumit.singh.2025@absedu.in</p>
              <p>📞 8292140808</p>
            </div>

          </div>

          {/* VALUE SECTION */}
          <div className="p-10 border-b bg-gray-50">
            <div className="max-w-4xl">

              <h2 className="text-lg font-semibold mb-4">
                What I Do
              </h2>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                I help startups, analysts, and investors make better financial decisions 
                through structured research, financial modeling, and data-driven insights.
              </p>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="chip">Market Research</span>
                <span className="chip">Financial Modeling</span>
                <span className="chip">Startup Analysis</span>
                <span className="chip">Data Analytics</span>
              </div>

            </div>
          </div>
                    {/* BODY */}
          <div className="grid md:grid-cols-3 gap-10 p-10">

            {/* LEFT SIDEBAR */}
            <div className="space-y-8">

              {/* EDUCATION CARD */}
              <div className="card">
                <h3 className="section-title">EDUCATION</h3>

                <div className="space-y-4 text-sm">

                  <div>
                    <p className="font-semibold">
                      PGDM (Finance & Business Analytics)
                    </p>
                    <p className="text-gray-500 text-xs">
                      Asian Business School • 2025–2027
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      BBA (69%)
                    </p>
                    <p className="text-gray-500 text-xs">
                      IIMT College • 2021–2024
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      Senior Secondary (75%)
                    </p>
                    <p className="text-gray-500 text-xs">
                      Bihar Board • 2019–2021
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      Secondary (10th)
                    </p>
                    <p className="text-gray-500 text-xs">
                      CBSE Board
                    </p>
                  </div>

                </div>
              </div>

              {/* TECH SKILLS */}
              <div className="card">
                <h3 className="section-title">TECHNICAL SKILLS</h3>

                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    'Excel',
                    'Power BI',
                    'Tableau',
                    'Python',
                    'WordPress',
                    'SEO',
                    'AI Tools',
                    'PowerPoint',
                  ].map(skill => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* SOFT SKILLS */}
              <div className="card">
                <h3 className="section-title">SOFT SKILLS</h3>

                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Analytical Thinking</li>
                  <li>Communication</li>
                  <li>Team Collaboration</li>
                  <li>Presentation Skills</li>
                  <li>Time Management</li>
                </ul>
              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="md:col-span-2 space-y-6">

              {/* SUMMARY */}
              <div className="card">
                <h3 className="section-title">PROFESSIONAL SUMMARY</h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Finance professional with strong academic foundation in financial analysis,
                  business analytics, and corporate reporting. Hands-on experience in financial
                  modeling, cost analysis, budgeting, and performance reporting. Skilled in
                  Excel, Power BI, Tableau, and Python for data-driven decision-making.
                </p>
              </div>

              {/* SERVICES */}
              <div className="card">
                <h3 className="section-title">SERVICES</h3>

                <div className="space-y-4 text-sm text-gray-700">

                  <div>
                    <p className="font-semibold">Market Research Reports</p>
                    <p className="text-gray-500 text-xs">
                      Industry analysis, sector deep-dives, and competitive intelligence.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Financial Modeling</p>
                    <p className="text-gray-500 text-xs">
                      DCF, 3-statement models, and startup valuation frameworks.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Startup Consulting</p>
                    <p className="text-gray-500 text-xs">
                      Market sizing, unit economics, and investor-ready insights.
                    </p>
                  </div>

                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="card">
                <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>

                <div className="border-l pl-5 space-y-6">

                  <div>
                    <div className="flex justify-between">
                      <p className="font-semibold">
                        Business Analytics & Finance Associate Intern
                      </p>
                      <span className="text-xs text-gray-500">
                        Present
                      </span>
                    </div>

                    <p className="text-xs text-teal-600 mb-2">
                      GeoSEO Lab
                    </p>

                    <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                      <li>Supported financial models for cost analysis & budgeting</li>
                      <li>Analyzed operational & sales data</li>
                      <li>Built dashboards using Power BI & Tableau</li>
                      <li>Used Excel & Python for reporting & automation</li>
                      <li>Supported decision-making with structured insights</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* SELECTED WORK */}
              <div className="card">
                <h3 className="section-title">SELECTED WORK</h3>

                <div className="space-y-4 text-sm">

                  <div>
                    <p className="font-semibold">
                      Fintech Market Research Report
                    </p>
                    <p className="text-gray-500 text-xs">
                      Deep-dive analysis of Indian fintech ecosystem and growth drivers.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      Financial Model for Startup Valuation
                    </p>
                    <p className="text-gray-500 text-xs">
                      Built 3-statement model with projections and scenario analysis.
                    </p>
                  </div>

                </div>
              </div>

              {/* CASE STUDIES */}
              <div className="card">
                <h3 className="section-title">CASE STUDIES</h3>

                <div className="space-y-6 text-sm text-gray-700">

                  <div className="border-l-2 border-teal-500 pl-4">
                    <p className="font-semibold">Startup Financial Model & Valuation</p>
                    <ul className="list-disc ml-5 text-xs space-y-1">
                      <li>Built financial model</li>
                      <li>Conducted valuation</li>
                      <li>Investor-ready insights</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-teal-500 pl-4">
                    <p className="font-semibold">Market Research – Fintech</p>
                    <ul className="list-disc ml-5 text-xs space-y-1">
                      <li>Market analysis</li>
                      <li>Trend identification</li>
                      <li>Competitive landscape</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* TESTIMONIALS */}
              <div className="card">
                <h3 className="section-title">CLIENT FEEDBACK</h3>

                <div className="space-y-6 text-sm">

                  <div className="border p-4 rounded-lg">
                    <p className="italic">
                      “Highly structured financial model. Excellent clarity.”
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Startup Founder
                    </p>
                  </div>

                  <div className="border p-4 rounded-lg">
                    <p className="italic">
                      “Deep insights and actionable recommendations.”
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Business Analyst
                    </p>
                  </div>

                </div>
              </div>

              {/* CORE SKILLS */}
              <div className="card">
                <h3 className="section-title">CORE FINANCE & ANALYTICS</h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <p>• Financial Modeling</p>
                  <p>• Cost Analysis</p>
                  <p>• Performance Reporting</p>
                  <p>• Business Analytics</p>
                  <p>• Budgeting Support</p>
                  <p>• Data Interpretation</p>
                </div>
              </div>

              {/* ADDITIONAL */}
              <div className="card">
                <h3 className="section-title">ADDITIONAL INFORMATION</h3>

                <ul className="text-sm list-disc ml-5 space-y-1">
                  <li>Finance-driven analytics focus</li>
                  <li>Data-driven decision making</li>
                  <li>Adaptable in fast-paced environments</li>
                </ul>
              </div>

            </div>

          </div>
                  </div> {/* END MAIN CARD */}

      </div> {/* END CONTAINER */}

      {/* CTA SECTION */}
      <div className="p-12 bg-[#1A2B3C] text-white text-center mt-10">

        <h2 className="text-xl font-semibold mb-3 tracking-tight">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
          Available for research mandates, financial modeling, and strategic consulting engagements.
        </p>

        <a
          href="/contact"
          className="inline-block bg-teal-500 text-black px-6 py-3 text-sm font-medium rounded-md hover:bg-teal-400 transition"
        >
          Start a Project →
        </a>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .section-title {
          font-size: 11px;
          letter-spacing: 1.2px;
          color: #0f766e;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .chip {
          background: #e5e7eb;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .card {
          background: white;
          padding: 22px;
          border-radius: 14px;
          border: 1px solid #e6e8eb;
          transition: all 0.2s ease;
        }

        .card:hover {
          border-color: #d1d5db;
        }
      `}</style>

    </main>
  )
}