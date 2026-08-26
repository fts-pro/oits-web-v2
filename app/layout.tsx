import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CursorSpotlight } from '../components/CursorSpotlight';
import { BackToTop } from '../components/BackToTop';
import { ThemeProvider } from '../components/ThemeProvider';
import { COMPANY_NAME, LEGAL_ENTITY_NAME, TAGLINE, CONTACT_EMAIL, REGISTERED_ADDRESS } from '../data/governedData';

export const metadata: Metadata = {
  metadataBase: new URL('https://oitsdhaka.com'),
  title: {
    default: `${COMPANY_NAME} | Modernise, Build & Operate Business-Critical Software`,
    template: `%s | ${COMPANY_NAME}`
  },
  description: 'OITS is an accountable engineering partner that helps organisations Modernise, Build, and Operate business-critical software. Book a 90-minute Delivery Review.',
  keywords: [
    'software modernization',
    'legacy refactoring',
    'cloud migration',
    'enterprise web engineering',
    'dedicated engineering teams',
    'reliability engineering',
    'SRE pods',
    'TypeScript',
    'Next.js',
    'OITS Dhaka'
  ],
  authors: [{ name: LEGAL_ENTITY_NAME, url: 'https://oitsdhaka.com' }],
  creator: LEGAL_ENTITY_NAME,
  publisher: LEGAL_ENTITY_NAME,
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oitsdhaka.com',
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Accountable Engineering Partner`,
    description: 'We build and modernise the software your business runs on. Accountable engineering with senior human sign-off.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Modernise, Build, Operate`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Accountable Engineering Partner`,
    description: 'We build and modernise the software your business runs on.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://oitsdhaka.com',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_NAME,
  legalName: LEGAL_ENTITY_NAME,
  url: 'https://oitsdhaka.com',
  logo: 'https://oitsdhaka.com/logo.svg',
  description: 'Accountable engineering partner helping organisations Modernise, Build, and Operate business-critical software.',
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House # 42, Road # 2/A, Block # Z',
    addressLocality: 'Dhaka',
    postalCode: '1209',
    addressCountry: 'BD'
  },
  sameAs: [
    'https://github.com/oitsdhaka',
    'https://linkedin.com/company/oitsdhaka'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('oits_theme');
                if (stored === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#070A13] text-slate-900 dark:text-slate-100 antialiased flex flex-col selection:bg-sky-500/20 selection:text-sky-500 relative transition-colors duration-300">
        <ThemeProvider>
          <CursorSpotlight />
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
