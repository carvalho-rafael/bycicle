import Style from './style.module.scss'
import Image from 'next/image'
import Form from '../form'
export default function Header() {
    return (
        <div className={Style.container}>
            <div className={Style.head}>
                <h1>Ergonomic Byke</h1>
                <p>Confort, safety and beauty in one product. </p>
                <p>You're going to love get a ride! </p>
                <Image
                    src="/images/bike.png"
                    width={750}
                    height={500}
                    alt="Your Name"
                />
            </div>
            <Form></Form>
        </div>
    )
}