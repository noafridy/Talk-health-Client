
import Link from 'next/link';
import Header from './components/header';
import Card from './components/card'

export default function Index() {
    return (
        <div>
            <Header />
            <p>Hello Next.js</p>
            <Card />
        </div>
    );
}