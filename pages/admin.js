import { Footer } from '../components/Footer'
import { Table } from '../components/Table'
import { Layout } from '../components/Layout'
import Link from 'next/link'

import { fetchAllUsers } from '../utils/notion'

const AdminPage = ({ allUsers }) => (
  <Layout>
    <div className="content">
      <h1>react-notion-example</h1>
      <h3>Admin View</h3>
      <br />
      <Table data={allUsers} />
      <Link href="/">Go back home</Link>
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

export default AdminPage
