import { useEffect } from 'react'
// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
import Layout from '@/components/layout'
import ListItem from '../components/ListItem'
// import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
// import Link from 'next/link'
// import Date from '../components/date'
import data from '../../public/json/data.json'
import useFiltersStore from "@/store/filters"

export default function Home({ allPostsData }) {
  /*------------------------------
  Zustand Actions
  ------------------------------*/
  const filters = useFiltersStore((state) => state.filters)
  const addFilters = useFiltersStore((store) => store.addFilters)
  const removeFilters = useFiltersStore((store) => store.removeFilters)

  useEffect(() => {
    window.console.log('filters ---->', filters)
  }, [filters])

  return (
    <Layout home>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>Shu</strong>. I’m a software engineer and a
          translator (English/Japanese). You can contact me on{' '}
          <a href="https://twitter.com/chibicode">Twitter</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      {data.map(item => (
        <div
          key={item.id}
          onClick={() => addFilters(item.id)}
        >
          {item.company}
        </div>
      ))}
      {data.map(item => (
        <div
          key={item.id}
          onClick={() => removeFilters(item.id)}
        >
          {item.company}
        </div>
      ))}
      <ListItem label='ciao' />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
