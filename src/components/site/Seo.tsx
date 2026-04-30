import { Head } from 'vite-react-ssg'

const SITE_URL = 'https://smalltech.ontico.ru'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`
const SITE_NAME = 'Смоллтех'

interface SeoProps {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  keywords?: string
}

const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords,
}: SeoProps) => {
  const canonical = `${SITE_URL}${path}`
  const fullTitle = title.includes(SITE_NAME) ? title : title

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ru_RU" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article-specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={SITE_NAME} />
      )}
    </Head>
  )
}

export default Seo
