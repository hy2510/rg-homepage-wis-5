'use client'

import { userAgentFromString } from 'next/server'
import { useEffect, useState } from 'react'

export default function PageClient() {
  const [agent, setAgent] = useState('')

  const onRequestUserAgent = () => {
    fetch('/ko/zdebug/api', { method: 'post' })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
        setAgent(data.ua)
      })
  }

  const [selfAgent, setSelfAgent] = useState('')
  useEffect(() => {
    setSelfAgent(window.navigator.userAgent)
    const obj = userAgentFromString(window.navigator.userAgent)
  }, [])
  return (
    <>
      {agent}
      <button onClick={onRequestUserAgent}>Check UserAgent</button>
      <br />
      {'Client For: '}
      {selfAgent}
    </>
  )
}
