import { NextRequest, NextResponse, userAgent } from 'next/server'

export async function POST(request: NextRequest) {
  const ua = userAgent(request)
  console.log(ua)
  const ip = request.headers.get('x-forwarded-for') || 'unknwon'
  return NextResponse.json({ ua: JSON.stringify(ua), ip }, { status: 200 })
}
