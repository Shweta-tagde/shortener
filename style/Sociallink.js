import Link from 'next/link'
import social from '../style/socialstyle'
export default function Sociallink() {
    return (
        <social>
                <Link href="#">
                    <a>facebook</a>
                </Link>
                <Link href="#">
                    <a>Pinterest</a>
                </Link>
                <Link href="#">
                    <a>google</a>
                </Link>
                <Link href="#">
                    <a> twitter</a>
                </Link>
            </social>
    )
}
