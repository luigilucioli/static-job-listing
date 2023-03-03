import Layout from '../layout'
import Header from '@/components/Header'
import ListGroup from '@/components/ListGroup'
import Filters from '@/components/Filters'
import { getSortedPostsData } from '../../lib/posts'
import data from '../../public/json/data.json'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Header />
      <Filters />
      <ListGroup data={data} />
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
