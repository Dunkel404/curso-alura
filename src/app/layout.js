import './globals.css'
import { Aside } from '@/components/Aside';
import { Prompt } from 'next/font/google'

export const metadata = {
  title: 'alura-project',
  description: 'projeto da alura'
}

const prompt = Prompt ({
  weight: ['400', '600'],
  subsets: ['latin'],
  display:'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body className='appContainer'>
        <Aside></Aside>
        {children}
      </body>
    </html>
  );
}
