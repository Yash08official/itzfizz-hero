import './globals.css'

export const metadata = {
  title: 'Itzfizz Digital — We Build Digital Experiences',
  description: 'Award-winning web development and digital design studio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
