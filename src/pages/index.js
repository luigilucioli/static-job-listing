import Header from '@/components/Header'
import ListGroup from '@/components/ListGroup'
import Filters from '@/components/Filters'
import Layout from '@/layout'
import { useStyles } from '@/styles/pages'
import { getSortedPostsData } from '../../lib/posts'
import data from '../../public/json/data.json'

export default function Home() {
  const { classes } = useStyles()

  return (
    <Layout home>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Filters />
          <ListGroup
            className={classes.listGroup}
            items={data}
          />
        </div>
      </div>
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
