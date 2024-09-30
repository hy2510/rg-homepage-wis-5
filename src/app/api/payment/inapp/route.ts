import { getAuthorizationWithCookie } from '@/authorization/server/nextjsCookieAuthorization'
import { NextRequest } from 'next/server'
import Payment from '@/repository/server/payment'
import {
  RouteResponse,
  executeRequestAction,
  getBodyParameters,
} from '../../_util'

export async function POST(request: NextRequest) {
  const token = getAuthorizationWithCookie().getActiveAccessToken()
  if (!token) {
    return RouteResponse.invalidAccessToken()
  }

  const parameter = await getBodyParameters(
    request,
    'platform',
    'productId',
    'receipt',
  )
  const platform = parameter.getString('platform') as 'android' | 'ios'
  const productId = parameter.getString('productId')
  const receipt = parameter.getString('receipt')

  const [payload, status, error] = await executeRequestAction(
    Payment.inappPurchase(token, platform, { productId, receipt }),
  )
  if (error) {
    return RouteResponse.commonError()
  }
  return RouteResponse.response(payload, status)
}
