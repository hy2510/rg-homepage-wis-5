import { headers } from 'next/headers'
import PageClient from './_page_cl'

export const revalidate = 0

export default function Page() {
  const ip = headers().get('x-forwarded-for') || 'unknwon'
  const ua = headers().get('user-agent') || 'unkwon'

  return (
    <div style={{ marginTop: '40px', marginBottom: '40px' }}>
      <h3>Debugging</h3>
      <p>IP: {ip}</p>
      <p>UserAgent: {ua}</p>
      <PageClient />
    </div>
  )
}
