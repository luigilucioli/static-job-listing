import Head from 'next/head'
// import { useStyles } from './style'

export const siteTitle = 'Static listing job'

function Layout({ children }) {
  // const { classes } = useStyles()

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Static listing job"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Layout
