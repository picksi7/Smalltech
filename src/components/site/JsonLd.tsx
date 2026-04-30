/**
 * JsonLd — компонент для вставки JSON-LD структурированных данных (schema.org).
 * Используется совместно с vite-react-ssg: при SSG-сборке блок попадает в статический HTML.
 */

const SITE_URL = 'https://smalltech.ontico.ru'
const ORG_LOGO = `${SITE_URL}/og-image.jpg`

// ─── Базовые типы ────────────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string
  path: string
}

// ─── Organization (на всех страницах) ────────────────────────────────────────

export function OrganizationLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Смоллтех',
    alternateName: 'Smalltech',
    url: SITE_URL,
    logo: ORG_LOGO,
    description: 'Сообщество малых и средних ИТ-компаний России',
    sameAs: [],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── WebSite + SearchAction (только главная) ─────────────────────────────────

export function WebSiteLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Смоллтех',
    url: SITE_URL,
    description: 'Сообщество малых и средних ИТ-компаний России',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Article (манифест и исследование) ───────────────────────────────────────

interface ArticleLdProps {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified: string
}

export function ArticleLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: ArticleLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: { '@type': 'Organization', name: 'Смоллтех' },
    publisher: {
      '@type': 'Organization',
      name: 'Смоллтех',
      logo: { '@type': 'ImageObject', url: ORG_LOGO },
    },
    datePublished,
    dateModified,
    image: ORG_LOGO,
    mainEntityOfPage: `${SITE_URL}${path}`,
    url: `${SITE_URL}${path}`,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Dataset (только исследование) ───────────────────────────────────────────

export function DatasetLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Исследование болей smalltech и midtech — 468 анкет',
    description:
      'Топ-6 болей малых и средних ИТ-компаний. 468 анкет, 6 крупнейших ИТ-конференций страны (DevOpsConf, AiConf, GolangConf, TeamLead Conf, HighLoad++, CustDev), 979 аналитических единиц.',
    url: `${SITE_URL}/research`,
    creator: { '@type': 'Organization', name: 'Смоллтех', url: SITE_URL },
    datePublished: '2026-04-01',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    keywords: [
      'smalltech',
      'midtech',
      'ИТ-компании',
      'инженерные боли',
      'конференция',
      'исследование',
    ],
    measurementTechnique: 'Анкетирование участников ИТ-конференций',
    variableMeasured: 'Топ болей инженеров малых и средних ИТ-компаний',
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── BreadcrumbList (на всех страницах) ──────────────────────────────────────

export function BreadcrumbLd({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Главная', path: '/' }, ...items]
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
