import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // This wraps each page in the layout component..
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
