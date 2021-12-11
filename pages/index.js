import { Footer } from '../components/Footer'
import { Layout } from '../components/Layout'
import Link from 'next/link'
// import { postNewUser } from '../utils/notion'

const HomePage = () => (
  <Layout>
    <div className="content">
      <h1>react-notion-example</h1>
      <Link href="/admin">Admin View</Link>
    </div>
    <Footer />
  </Layout>
)

// export async function getStaticProps() {}

export default HomePage
