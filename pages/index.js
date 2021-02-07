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
      </footer>
    </div>
  )
}
