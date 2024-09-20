'use client'

import AppContextProvider, { ApplicationType } from '@/app/_context/AppContext'
import CustomerContextProvider from '@/app/_context/CustomerContext'
import GitpleContextProvider from '@/external/gitple/component/GitpleContext'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { useUpdateStaffLogOn } from '@/client/store/student/info/hook'
import {
  useStaffInfoFlagLogin,
  useStudentInfoFlagLogin,
} from '@/client/store/student/info/selector'
import DeviceContextProvider from '../_context/DeviceContext'
import { STAFF_PATH, isValidatePath } from '../site-path'
import ClientTo from './ClientTo'
import LoginForward from './LoginForward'

export default function AppInitializer({
  applicationType,
  userAgentInfo,
  customerJson,
  isLogin,
  isStaffAccess,
  children,
}: {
  applicationType: string
  userAgentInfo: string
  customerJson?: string
  isLogin?: boolean
  isStaffAccess?: boolean
  children?: ReactNode
}) {
  const path = usePathname()
  const loginStatus = useStudentInfoFlagLogin()
  const isLoginForwardValidatePath = isValidatePath(path)
  const updateStaffLogOn = useUpdateStaffLogOn()
  const staffLoginStatus = useStaffInfoFlagLogin()

  let appType: ApplicationType = 'app'
  if (applicationType === 'private') {
    appType = 'private'
  } else if (applicationType === 'school') {
    appType = 'school'
  } else if (applicationType === 'academy') {
    appType = 'academy'
  }
  if (isStaffAccess && staffLoginStatus === 'unknown') {
    updateStaffLogOn()
  }
  return (
    <DeviceContextProvider userAgentInfo={userAgentInfo}>
      <AppContextProvider applicationType={appType}>
        <CustomerContextProvider customerJson={customerJson}>
          <GitpleContextProvider>
            {children}
            {!isLogin && appType !== 'app' && isStaffAccess && (
              <ClientTo to={STAFF_PATH.MAIN} isReplace={true} />
            )}
            {isLogin &&
              loginStatus === 'unknown' &&
              isLoginForwardValidatePath && <LoginForward to={path} />}
          </GitpleContextProvider>
        </CustomerContextProvider>
      </AppContextProvider>
    </DeviceContextProvider>
  )
}
