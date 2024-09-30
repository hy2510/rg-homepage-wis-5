import Repository from '@/repository/client'
import { fetcher } from '../../fetcher-action'
import { useFetchBasicState } from '../../hooks'
import { useStudentHistoryAction } from '../../student/history/selector'
import { useStudentInfoAction } from '../../student/info/selector'

export function useFetchInappPurchase({
  iapInterface,
  platform,
}: {
  iapInterface: any
  platform: 'android' | 'ios'
}) {
  const { loading, setLoading, error, setError } = useFetchBasicState()

  const { setInfo } = useStudentInfoAction()
  const { setHistory } = useStudentHistoryAction()

  const fetch = ({
    itemId,
    callback,
  }: {
    itemId: string
    callback?: (isSuccess: boolean, code?: number, extra?: string) => void
  }) => {
    async function fetching() {
      setLoading(true)

      const inappRequest = await promiseInappSubscribe({
        iapInterface,
        platform,
        itemId,
      })
      if (inappRequest.result) {
        let isConsumeSuccess = false
        if (platform === 'android') {
          const acknowledge = await promiseInappAcknowledgeForAnd(
            iapInterface,
            inappRequest,
          )
          isConsumeSuccess = !!acknowledge
        } else {
          isConsumeSuccess = true
        }
        // FIXME // TODO : OS 별로 토큰 데이터 전송해야 하는 내용이 다름

        if (isConsumeSuccess) {
          const res = await fetcher.response(
            Repository.postInappPurchase({
              platform,
              productId: itemId,
              receipt: inappRequest.purchaseToken,
            }),
          )
          if (res.isSuccess && res.payload?.code === 0) {
            let isUpdateStudentSuccess = false

            const studyRes = await Promise.all([
              fetcher.response(Repository.getStudent()),
              fetcher.response(Repository.getStudentHistoryList()),
            ])
            if (studyRes[0].isSuccess && studyRes[1].isSuccess) {
              setInfo(studyRes[0].payload)
              setHistory(studyRes[1].payload)
              isUpdateStudentSuccess = true
            }
            if (isUpdateStudentSuccess) {
              // 성공
              callback && callback(true, 0)
            } else {
              // 성공했지만 갱신 실패
              callback && callback(false, -10)
            }
          } else {
            // 상품 지급 실패
            callback && callback(false, -2)
          }
        } else {
          // 상품 소비 실패
          callback && callback(false, -1)
        }
      } else {
        // InApp Purchase 취소 or 실패
        callback && callback(false, -99)
      }

      setLoading(false)
    }
    fetching()
  }
  const t = () => {
    fetcher
      .response(
        Repository.postInappPurchase({
          platform,
          productId: 'rg.1m.nonsub0',
          receipt:
            'fafoolfelfohpljmombebjpf.AO-J1OxkeOS9UDo97kjdvGwrBoF8lNCPliRGQT02HcKUSePHS7YyPAE-zzrBnmmzKT7tmtIkNCYTN68EwsXnnICQnKf9nU2y71_7IOlIld0sJaYmPx3o4IM',
        }),
      )
      .then((res) => {
        alert('wow:: ' + res.isSuccess)
      })
  }
  return {
    fetch,
    loading,
    error,
    t,
  }
}

function promiseInappSubscribe({
  iapInterface,
  platform,
  itemId,
}: {
  iapInterface: any
  platform: 'android' | 'ios'
  itemId: string
}): Promise<{
  result: boolean
  purchaseToken: string
  productId: string
}> {
  const promise = new Promise<{
    result: boolean
    purchaseToken: string
    productId: string
  }>((resolve, _) => {
    iapInterface.subscribe(
      itemId,
      platform,
      (returnModel: {
        result: boolean
        purchaseToken: string
        productId: string
      }) => {
        resolve(returnModel)
      },
    )
  })
  return promise
}

function promiseInappAcknowledgeForAnd(
  iapInterface: any,
  returnModel: {
    result: boolean
    purchaseToken: string
    productId: string
  },
): Promise<unknown> {
  const promise = new Promise<unknown>((resolve, _) => {
    iapInterface.subscribeAcknowledgeForAnd(
      returnModel.purchaseToken,
      returnModel.productId,
      (returnModel: unknown) => {
        resolve(returnModel)
      },
    )
  })
  return promise
}
