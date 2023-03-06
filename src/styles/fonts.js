import localFont from 'next/font/local'

const leagueSpartan = localFont({
  src: [
    {
      path: './fonts/LeagueSpartan-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  preload: true,
  variable: '--primary-font'
})

export const fonts = {
  leagueSpartan: leagueSpartan.style.fontFamily
}