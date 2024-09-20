import 'server-only'
import { GitplePreloadScript } from '@/external/gitple/component/GitpleContext'

export default function PreloadScript() {
  return (
    <>
      <GitplePreloadScript />
      <script
        defer
        src="https://pcdn2.swing2app.co.kr/swing_public_src/v3/2024_07_23_001/js/swing_app_on_web.js"></script>
      <script>swingWebViewPlugin.app.ui.setIosBackColor(`#f0f2f5`);</script>
    </>
  )
}
