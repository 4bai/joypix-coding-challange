import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@components/theme-provider'
import { ny } from '~/lib/utils'
import '~/styles/globals.css'

import { UserProvider } from '@/components/user/hooks/useUser'

import Header from '~/components/header'
/* import { supabase } from '@/lib/initSupabase'
import { SessionContextProvider } from '@supabase/auth-helpers-react' */

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
export const metadata: Metadata = {
  title: 'Coding Challenge',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={ny(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <UserProvider>
            <Header />
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
