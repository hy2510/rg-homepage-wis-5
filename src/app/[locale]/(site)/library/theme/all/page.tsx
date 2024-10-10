'use client'

import { BackLink, Nav, NavItem } from '@/ui/common/common-components'
import { SeriesItem, SeriesList } from '@/ui/modules/library-explore-series-list/series-list'
import useTranslation from '@/localization/client/useTranslations'
import { useStyle } from '@/ui/context/StyleContext'
import TabNavBar from '@/ui/common/TabNavBar'
import { ThemeListItem } from '@/ui/modules/library-explore-theme-list/theme-list'

const STYLE_ID = 'page_theme'

export default function Page() {
  const style = useStyle(STYLE_ID)
  const { t } = useTranslation()

  return (
    <>
      <main className={style.theme_all}>
        <BackLink href={'/library'} largeFont>
          {t('t393')}
        </BackLink>
        <Nav>
          <NavItem active={true}>
            eBook
          </NavItem>
          <NavItem active={false}>
            pBook Quiz
          </NavItem>
        </Nav>
        <div></div>
        <div className={style.container}>
          <ThemeListItem
            title={'Adventure'}
            themeImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/theme_web_v20/adventure.jpg'}
          />
          <ThemeListItem
            title={'Adventure'}
            themeImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/theme_web_v20/adventure.jpg'}
          />
          <ThemeListItem
            title={'Adventure'}
            themeImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/theme_web_v20/adventure.jpg'}
          />
          <ThemeListItem
            title={'Adventure'}
            themeImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/theme_web_v20/adventure.jpg'}
          />
          <ThemeListItem
            title={'Adventure'}
            themeImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/theme_web_v20/adventure.jpg'}
          />
          <ThemeListItem
            title={'Adventure'}
            themeImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/theme_web_v20/adventure.jpg'}
          />
          <ThemeListItem
            title={'Adventure'}
            themeImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/theme_web_v20/adventure.jpg'}
          />
        </div>
      </main>
    </>
  )
}