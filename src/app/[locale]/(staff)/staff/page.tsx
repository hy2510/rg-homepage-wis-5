'use client'

import { STAFF_PATH } from '@/app/site-path'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const ADMIN_BASE_URL = 'http://localhost:4000'
type StaffSignature = {
  host: string
  code: string
  i: number
}

export default function Page() {
  // const updateStaffLogon = useUpdateStaffLogOn()
  const searchParams = useSearchParams()
  const open = searchParams.get('open')
  const router = useRouter()
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<boolean | undefined>(undefined)
  // const [payload, setPayload] = useState<StaffSignature | undefined>(undefined)
  // const adminHyperLink = (signature: StaffSignature) => {
  //   // location.replace(`${ADMIN_BASE_URL}?c=${signature?.code}&i=${signature?.i}`)
  //   console.log('a', `${ADMIN_BASE_URL}?c=${signature?.code}&i=${signature?.i}`)
  // }
  useEffect(() => {
    if (!open) {
      router.replace(STAFF_PATH.BOARD)
    }
  }, [open, router])
  // useEffect(() => {
  //   async function fetching() {
  //     const response = await requestStaffSignature()
  //     if (response) {
  //       setPayload(response)
  //       updateStaffLogon()
  //     } else {
  //       setError(true)
  //     }
  //     setLoading(false)
  //   }
  //   fetching()
  // }, [])
  // if (loading) {
  //   return <></>
  // }
  // if (error) {
  //   return (
  //     <div>
  //       <div>잘못된 접근입니다.</div>
  //       <div>
  //         <Button
  //           onClick={() => {
  //             router.replace('/signoff')
  //           }}>
  //           나가기
  //         </Button>
  //       </div>
  //     </div>
  //   )
  // }
  // return (
  //   <div>
  //     Staff Menu
  //     <div>
  //       <Button
  //         onClick={() => {
  //           if (payload) {
  //             adminHyperLink(payload)
  //           }
  //         }}>
  //         관리하기
  //       </Button>
  //       <div>
  //         <a href="http://localhost:3000/mirage?uid=001104C2021000006">
  //           <b>
  //             <u>TEST</u>
  //           </b>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // )
}

async function requestStaffSignature(): Promise<StaffSignature | undefined> {
  let result: StaffSignature | undefined = undefined

  try {
    const dataFetch = await fetch(`/api/staff`, {
      method: 'get',
    })
    if (dataFetch.ok) {
      const data = await dataFetch.json()
      result = data
    }
  } catch (error) {}

  return result
}
