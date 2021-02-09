import Image from 'next/image'
import Style from './style.module.scss'

export default function NavBar() {
    return (
        <div className={Style.container}>
            <div className={Style.logo}>
                <Image
                    src="/images/logo.png"
                    layout='fill'
                    alt="Your Name"
                />
            </div>
        </div>
    )
}