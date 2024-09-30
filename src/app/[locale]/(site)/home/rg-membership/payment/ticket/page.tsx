'use client'

import useTranslation from '@/localization/client/useTranslations'
import { useStudentStudyable } from '@/client/store/student/info/selector'
import Ticket from '../_cpnt/Ticket'

export default function Page() {
  const { value: studyState } = useStudentStudyable()

  // @language 'common'
  const { t } = useTranslation()

  if (studyState === 'PAUSED') {
    // 학습 일시중지 중에는 티켓등록을 할 수 없습니다.
    return <div>{t('t731')}</div>
  }
  return <Ticket />
}
