'use client'

import React, { useContext, useState } from 'react'

type Platform = 'Web' | 'Android' | 'iOS' | 'unknown'

type DeviceContextProps = {
  platform: Platform
  info: string
  tag: string
}

const DeviceContext = React.createContext<DeviceContextProps>({
  platform: 'unknown',
  info: '',
  tag: '',
})

export default function DeviceContextProvider({
  userAgentInfo,
  children,
}: {
  userAgentInfo: string
  children: React.ReactNode
}) {
  //FIXME : 실제 Device 연동 필요
  const [device, setDevice] = useState<DeviceContextProps>({
    platform: 'Web',
    info: '',
    tag: userAgentInfo,
  })
  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  )
}

export function useDevicePlatform(): Platform {
  const context = useContext(DeviceContext)
  if (!context) {
    throw new Error('ContextComponent is not binded.')
  }
  return context.platform
}

export function useDeviceFlatformInfo(): string {
  const context = useContext(DeviceContext)
  if (!context) {
    throw new Error('ContextComponent is not binded.')
  }
  return `${context.platform}${context.info ? `(${context.info})` : ''}_${context.tag}`
}
