import Head from 'next/head'
import Style from './style.module.scss'

export default function NavBar() {
    return (
        <div className={Style.container}>
            <Head>
                <title>Bicycle</title>
            </Head>
            <img className={Style.logo} src="/images/logo.png" alt="Your Name" />
        </div>
    )
}
