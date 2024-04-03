import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { SiteHeader } from '@/components/site-header'
import { QueryProvider } from '@/context/query-provider'
import { ThemeProvider } from '@/context/theme-provider'
import SessionAuthProvider from '@/context/SessionAuthProvider'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen', fontSans.className)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <QueryProvider>
            <SessionAuthProvider>
              <div className='relative flex min-h-screen flex-col'>
                <SiteHeader />
                <div className='flex-1 justify-center'>
                  {' '}
                  <div className='container'>{children}</div>
                </div>
                <Toaster />
              </div>
            </SessionAuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
