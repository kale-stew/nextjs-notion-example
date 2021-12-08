import { Footer } from '../components/Footer'
import { Table } from '../components/Table'
import { Layout } from '../components/Layout'

import { fetchAllUsers } from '../utils/notion'

const HomePage = ({ allUsers }) => (
  <Layout>
    <div className="content">
      <h1>react-notion-example</h1>
      <br />
      <Table data={allUsers} />
    </div>
    <Footer />
  </Layout>
)

export async function getStaticProps() {
  const response = await fetchAllUsers()

  return {
    props: {
      allUsers: response,
    },
  }
}

export default HomePage
