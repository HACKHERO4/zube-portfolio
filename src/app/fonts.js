import localFont from 'next/font/local'
import { Jost } from 'next/font/google';

export const faBrands = localFont({
  src: './fonts/fa-brands-400.woff2',
  variable: '--font-fa-brands'
})

export const faSolid = localFont({
  src: './fonts/fa-solid-900.woff2',
  variable: '--font-fa-solid'
})

export const jost = Jost({ subsets: ['latin'] });
