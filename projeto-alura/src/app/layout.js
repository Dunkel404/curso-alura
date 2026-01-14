import './globals.css'
import { Aside } from '@/components/Aside/page';
export const metadata = {
  title: 'alura-project',
  description: 'projeto da alura'
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Aside></Aside>
        {children}
      </body>
    </html>
  );
}
