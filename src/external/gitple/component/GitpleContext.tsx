'use client'

import ChannelTalkContextProvider from '@/external/channel-talk/component/ChannelTalkContext'
import React from 'react'
import { useStudentInfo } from '@/client/store/student/info/selector'
import { useCustomerInfo } from '../../../app/_context/CustomerContext'
import { GitpleChatbot } from '../chatbot-gitple'

const GitpleChatbotContext = React.createContext<undefined>(undefined)

export default function GitpleContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { customerId, name: customerName, customerUse } = useCustomerInfo()
  const { loginId, studentId } = useStudentInfo()

  // useEffect(() => {
  //   GitpleChatbot.connect(
  //     customerId,
  //     customerName,
  //     customerUse.toLocaleLowerCase(),
  //   )
  //   return () => {
  //     GitpleChatbot.disconnect()
  //   }
  // }, [customerId, customerName, customerUse])

  // useEffect(() => {
  //   GitpleChatbot.updateUserInfo(studentId, loginId)
  // }, [loginId, studentId])

  return (
    <GitpleChatbotContext.Provider value={undefined}>
      <ChannelTalkContextProvider>{children}</ChannelTalkContextProvider>
    </GitpleChatbotContext.Provider>
  )
}

export const useGitpleChatbotController = () => {
  return {
    showChat: GitpleChatbot.showChat,
    hideChat: GitpleChatbot.hideChat,
  }
}

export function GitplePreloadScript() {
  return <script defer src="/assets/gitple-bridge.js"></script>
}
