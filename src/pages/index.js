import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const test = process.env.PASSWORD
console.log(test)

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name='description' content='Cummings-Breitenberg LLC' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h1>home</h1>
        </>
    )
}
