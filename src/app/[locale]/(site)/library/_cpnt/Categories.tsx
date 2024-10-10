import SITE_PATH from '@/app/site-path'
import useTranslation from '@/localization/client/useTranslations'
import { useStyle } from '@/ui/context/StyleContext'
import Image from 'next/image'
import Link from 'next/link'

const STYLE_ID = 'page_library'

const BookSearchBarCategoryData = [
    {
      id: 'DODO',
      title: '기초 영어',
      comment: '알파벳, 파닉스 배우기',
      image: '/src/images/@book-search-bar/dodo_abc.png',
      link: SITE_PATH.LIBRARY.DODO_ABC_STUDY,
    },
    {
      id: 'PK',
      title: '기초 영어 (classic)',
      comment: '알파벳, 파닉스 배우기',
      image: '/src/images/@book-search-bar/prek.svg',
      link: SITE_PATH.LIBRARY.PRE_K,
    },
    {
      id: 'EB',
      title: 'eBook',
      comment: '스토리 읽기와 학습',
      image: '/src/images/@book-search-bar/ebook.svg',
      link: SITE_PATH.LIBRARY.E_BOOK,
    },
    {
      id: 'PB',
      title: 'pBook Quiz',
      comment: '종이책 읽고, 온라인 퀴즈',
      image: '/src/images/@book-search-bar/pbook_quiz.svg',
      link: SITE_PATH.LIBRARY.P_BOOK,
    },
    {
      id: 'MOVIE',
      title: 'Movies',
      comment: '동영상이 포함된 eBook',
      image: '/src/images/@book-search-bar/movie_book.svg',
      link: SITE_PATH.LIBRARY.MOVIE_BOOK,
    },
    {
      id: 'NEWBOOK',
      title: 'New Books',
      comment: '이달의 신규 학습 도서',
      image: '/src/images/@book-search-bar/new_book.svg',
      link: SITE_PATH.LIBRARY.NEW_BOOK,
    },
    // {
    //   id: 'LC',
    //   title: 'Listening',
    //   comment: 'Listening 강화 훈련',
    //   image: '/src/images/@book-search-bar/listening.svg',
    //   link: SITE_PATH.LIBRARY.HOME,
    // },
    // {
    //   id: 'MS',
    //   title: 'Writing',
    //   comment: 'Writing 강화 훈련',
    //   image: '/src/images/@book-search-bar/writing.svg',
    //   link: SITE_PATH.LIBRARY.HOME,
    // },
    {
      id: 'WORKBOOK',
      title: 'Workbook',
      comment: '워크북 연계 도서',
      image: '/src/images/@book-search-bar/workbook.svg ',
      link: SITE_PATH.LIBRARY.WORKBOOK,
    },
    {
      id: 'SERIES',
      title: 'Series',
      comment: '',
      image: '/src/images/@book-search-bar/series_eb.svg',
      link: SITE_PATH.LIBRARY.SERIES_ALL,
    },
    {
      id: 'THEME',
      title: 'Theme',
      comment: '',
      image: '/src/images/@book-search-bar/theme.png',
      link: SITE_PATH.LIBRARY.THEME_ALL,
    },
]

export default function Categories() {
    const style = useStyle(STYLE_ID)

    const { t } = useTranslation()

    return (
        <div className={style.categories}>
            <div className={style.txt_h}>{t('t492')}</div>
            <div className={style.container}>
                {BookSearchBarCategoryData.map((a, i) => {
                    return (
                        <>
                            <Link href={a.link}>
                                <>
                                    <div className={style.category_item}>
                                        <div className={style.category_image} style={{backgroundImage: `url(${a.image})`}}></div>
                                        <div className={style.txt_title}>{a.title}</div>
                                    </div>
                                </>
                            </Link>
                        </>
                    )
                })}
            </div>
        </div>
    )
}