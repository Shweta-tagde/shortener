import Link from 'next/link'
import {Social} from './socialstyle'
export default function Sociallink() {
    return (
        <Social>
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
            </Social>
    )
}
