'use client'

import LoginForward from '@/app/_app/LoginForward'
import SITE_PATH from '@/app/site-path'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/ui/common/common-components'
import useTranslation from '@/localization/client/useTranslations'

export default function Page() {
  const searchParams = useSearchParams()
  const uid = searchParams.get('uid')

  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean | undefined>(undefined)
  const [redirect, setReidrect] = useState('')

  const { t } = useTranslation()

  useEffect(() => {
    async function fetching(uid: string) {
      const response = await requestMirageStudent(uid)
      if (response) {
        setReidrect(SITE_PATH.LIBRARY.HOME)
      } else {
        setError(true)
      }
      setLoading(false)
    }
    if (uid) {
      fetching(uid)
    }
  }, [uid])

  if (loading) {
    return <></>
  }
  if (error) {
    return (
      <div>
        <div>{/* 잘못된 접근입니다. */}{t('t285')}</div>
        <div>
          <Button
            onClick={() => {
              router.replace('/signoff')
            }}>
            {/* 나가기 */}
            {t('t767')}
          </Button>
        </div>
      </div>
    )
  }
  return <>{redirect && <LoginForward to={redirect} />}</>
}

async function requestMirageStudent(studentId: string): Promise<boolean> {
  let success = false

  try {
    const dataFetch = await fetch(`/api/staff/mirage?uid=${studentId}`, {
      method: 'put',
    })
    if (dataFetch.ok) {
      const data = await dataFetch.json()
      success = data.success
    } else {
      success = false
    }
  } catch (error) {
    success = false
  }
  return success
}
