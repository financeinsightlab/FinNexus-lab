import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

const filePath = path.join(process.cwd(), 'data', 'leads.json')

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, inquiry, message } = body

    const newLead = {
      name,
      email,
      inquiry,
      message,
      createdAt: new Date().toISOString(),
    }

    // 📥 READ EXISTING LEADS
    let leads = []

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      leads = JSON.parse(fileData)
    }

    // ➕ ADD NEW LEAD
    leads.push(newLead)

    // 💾 SAVE BACK TO FILE
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2))

    console.log('📊 Lead Saved:', newLead)

    // 📧 SEND EMAIL
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['sumitsingh7445@gmail.com'],
      subject: `New Inquiry: ${inquiry}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log('✅ Email Sent')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('❌ ERROR:', error)

    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}