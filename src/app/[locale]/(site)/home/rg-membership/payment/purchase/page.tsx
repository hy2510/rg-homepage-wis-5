'use client'

import { useSiteBlueprint } from '@/app/_context/CustomerContext'
import { useDevicePlatform } from '@/app/_context/DeviceContext'
import useTranslation from '@/localization/client/useTranslations'
import { useStudentStudyable } from '@/client/store/student/info/selector'
import Purchase from '../_cpnt/Purchase'
import PurchaseInApp from '../_cpnt/PurchaseInApp'

export default function Page() {
  const { country, target, isPaymentable } = useSiteBlueprint()
  const { value: studyState } = useStudentStudyable()
  const platform = useDevicePlatform()

  // @language 'common'
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
      return (
        <PurchaseInApp
          purchaseType={purchaseType}
          isChangeUserInfo={isChangeUserInfo}
        />
      )
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
