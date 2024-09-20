'use client'

import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      console.log(e.data)
      console.log(e)
      if (e.origin === 'https://integratedpay.readinggate.com') {
        alert('Parent')
        console.log(e.data)
      } else {
        alert('Another origin.')
        alert(e.origin)
      }
    }
    window.addEventListener('message', messageHandler)
    return () => {
      window.removeEventListener('message', messageHandler)
    }
  }, [])
  return <></>
}
