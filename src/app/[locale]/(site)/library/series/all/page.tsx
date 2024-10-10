'use client'

import { BackLink, Nav, NavItem } from '@/ui/common/common-components'
import { SeriesItem, SeriesList } from '@/ui/modules/library-explore-series-list/series-list'
import useTranslation from '@/localization/client/useTranslations'
import { useStyle } from '@/ui/context/StyleContext'
import TabNavBar from '@/ui/common/TabNavBar'

const STYLE_ID = 'page_series'

export default function Page() {
  const style = useStyle(STYLE_ID)
  const { t } = useTranslation()

  return (
    <>
      <main className={style.series_all}>
        <BackLink href={'/library'} largeFont>
        {t('t392')}
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
          <SeriesItem
              key={0}
              theme={'red'}
              seriesImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Funny_Bone_Readers.png'}
              seriesName={'Funny Bone Readers'}
          />
          <SeriesItem
              key={0}
              theme={'red'}
              seriesImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Funny_Bone_Readers.png'}
              seriesName={'Funny Bone Readers'}
          />
          <SeriesItem
              key={0}
              theme={'red'}
              seriesImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Funny_Bone_Readers.png'}
              seriesName={'Funny Bone Readers'}
          />
          <SeriesItem
              key={0}
              theme={'red'}
              seriesImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Funny_Bone_Readers.png'}
              seriesName={'Funny Bone Readers'}
          />
          <SeriesItem
              key={0}
              theme={'red'}
              seriesImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Funny_Bone_Readers.png'}
              seriesName={'Funny Bone Readers'}
          />
          <SeriesItem
              key={0}
              theme={'red'}
              seriesImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Funny_Bone_Readers.png'}
              seriesName={'Funny Bone Readers'}
          />
          <SeriesItem
              key={0}
              theme={'red'}
              seriesImgSrc={'https://wcfresource.a1edu.com/newsystem/appmobile/thumbnail/series_web_v7/Funny_Bone_Readers.png'}
              seriesName={'Funny Bone Readers'}
          />
        </div>
      </main>
    </>
  )
}