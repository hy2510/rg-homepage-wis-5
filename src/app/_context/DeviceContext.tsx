'use client'

import React, { useContext, useState } from 'react'

type Platform = 'Web' | 'Android' | 'iOS' | 'unknown'

type DeviceContextProps = {
  platform: Platform
  info: string
  tag: string
}

type SetDevice = {
  set?: (device: DeviceContextProps) => void
}

const DeviceContext = React.createContext<DeviceContextProps & SetDevice>({
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
  const [device, setDevice] = useState<DeviceContextProps>({
    platform: 'Web',
    info: '',
    tag: userAgentInfo,
  })
  return (
    <DeviceContext.Provider value={{ ...device, set: setDevice }}>
      {children}
    </DeviceContext.Provider>
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

export function useUpdateDevicePlatform(): (
  device: DeviceContextProps,
) => void {
  const context = useContext(DeviceContext)
  if (!context) {
    throw new Error('ContextComponent is not binded.')
  }
  if (!context.set) {
    throw new Error('set function is not defined.')
  }
  return context.set
}
