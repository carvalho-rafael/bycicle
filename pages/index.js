import Head from 'next/head'
import NavBar from '../components/navbar'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Header></Header>
      <footer>
        <h1>{process.env.ZOHO_PASS}</h1>
      </footer>
    </div>
  )
}
