import Layout from "../components/Layout";
import Test from "../components/Test";
import Head from 'next/head'

const array = [
    {
        name: 'John',
        profession: 'Web',
        age: 28
    },
    {
        name: 'Jace',
        profession: 'Toddie',
        age: 4
    }
]

export default function AccountPage() {
    return (
        // Eventually will change div to the layout component
        <section>
            <Head>
                <title>Account</title>
            </Head>
            <h1>AccountPage</h1>
            <Test cool={`hi ${array[0].name} I'm ${array[1].name} and I'm a ${array[1].profession}`}/> 
        </section>
    )
}