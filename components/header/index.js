import Style from './style.module.scss'
import Image from 'next/image'
export default function Header() {
    return (
        <div className={Style.container}>
            <Image
                src="/images/bike.png"
                width={700}
                height={500}
                alt="Your Name"
            />
        </div>
    )
}