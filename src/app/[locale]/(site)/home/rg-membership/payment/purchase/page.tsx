'use client'

import { useSiteBlueprint } from '@/app/_context/CustomerContext'
import { useDevicePlatform } from '@/app/_context/DeviceContext'
import { useStudentStudyable } from '@/client/store/student/info/selector'
import Purchase from '../_cpnt/Purchase'
import useTranslation from '@/localization/client/useTranslations'

export default function Page() {
  const { country, target, isPaymentable } = useSiteBlueprint()
  const { value: studyState } = useStudentStudyable()
  const platform = useDevicePlatform()
  
  const { t } = useTranslation()

  if (studyState === 'PAUSED') {
    // 학습 일시중지 중에는 이용권을 구매할 수 없습니다.
    return <div>{t('t730')}</div>
  }

  if (isPaymentable && target.private && platform !== 'unknown') {
    let purchaseType: 'direct' | 'directvn' | 'android' | 'ios' = 'direct'
    let isChangeUserInfo = country.korea
    if (platform === 'Android' || platform === 'iOS') {
      purchaseType = platform.toLowerCase() as 'android' | 'ios'
    } else if (country.vietnam) {
      purchaseType = 'directvn'
    }
    return (
      <Purchase
        purchaseType={purchaseType}
        isChangeUserInfo={isChangeUserInfo}
      />
    )
  }
  return <>{`Not accessible.`}</>
}
