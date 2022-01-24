import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <p>Search</p>
            </div>
            <Nav/>
        </header>
    )
}