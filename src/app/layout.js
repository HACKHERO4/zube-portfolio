import { faBrands, faSolid } from './fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${faBrands.variable} ${faSolid.variable}`}>
      <body>{children}</body>
    </html>
  )
}
