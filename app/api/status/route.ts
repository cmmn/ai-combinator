import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    isAvailable: process.env.IS_AVAILABLE || 'false'
  })
}