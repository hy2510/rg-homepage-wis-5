import 'server-only'
import { GitplePreloadScript } from '@/external/gitple/component/GitpleContext'
import { Swing2AppPreloadScript } from '@/external/swing2app/component/Swing2AppContext'

export default function PreloadScript() {
  return (
    <>
      <GitplePreloadScript />
      <Swing2AppPreloadScript />
    </>
  )
}
