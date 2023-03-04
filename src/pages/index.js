import Layout from '../layout'
import Header from '@/components/Header'
import ListGroup from '@/components/ListGroup'
import Filters from '@/components/Filters'
import { getSortedPostsData } from '../../lib/posts'
import data from '../../public/json/data.json'
import { makeStyles } from '@/styles/makeStyle'
import style from '@/styles/pages'

const useStyles = makeStyles({ name: 'Page_Home' })(style)

export default function Home({ allPostsData }) {
  const { classes } = useStyles()

  return (
    <Layout home>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Filters />
          <ListGroup
            className={classes.listGroup}
            data={data}
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
