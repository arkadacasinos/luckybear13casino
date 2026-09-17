import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://luckybear13casino.vercel.app/'),
  title: 'Lucky Bear Casino — официальный сайт и рабочее зеркало для игры онлайн',
  description:
    'Lucky Bear Casino — официальный сайт и актуальное зеркало. Регистрация, бонусы, слоты и быстрые выплаты. Лаки Бир Казино онлайн работает круглосуточно, вход без ограничений.',
  keywords: [
    'lucky bear casino',
    'luckybear casino',
    'luckybear casino зеркало',
    'luckybear casino официальный',
    'luckybear casino официальный сайт',
    'lucky bear казино',
    'лаки бир казино',
    'лакибир казино',
    'лаки бир казино зеркало',
    'лаки бир казино онлайн',
    'лаки бир казино официальный',
    'лаки бир казино официальный сайт',
    'лакибир казино официальный сайт',
    'лаки бир казино сайт',
  ],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Lucky Bear Casino — официальный сайт и рабочее зеркало для игры онлайн',
    description:
      'Lucky Bear Casino — официальный сайт и актуальное зеркало. Регистрация, бонусы, слоты и быстрые выплаты. Лаки Бир Казино онлайн работает круглосуточно.',
    url: 'https://luckybear13casino.vercel.app/',
    type: 'website',
    locale: 'ru_RU',
    images: ['/art-hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear Casino — официальный сайт и рабочее зеркало для игры онлайн',
    description:
      'Lucky Bear Casino — официальный сайт и актуальное зеркало. Регистрация, бонусы, слоты и быстрые выплаты.',
    images: ['/art-hero.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f3d2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <link rel="canonical" href="https://luckybear13casino.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Lucky Bear Casino" />
        <meta name="theme-color" content="#0f3d2e" />
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
      </head>
      <body>{children}</body>
    </html>
  )
}
