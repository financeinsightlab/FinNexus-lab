import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'leads.json')

  let leads = []

  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf-8')
    leads = JSON.parse(fileData)
  }

  return NextResponse.json(leads)
}