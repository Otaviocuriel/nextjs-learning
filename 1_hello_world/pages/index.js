import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Styles from '../styles/Home.module.css'  

export default function Home() {
    return (
        <div className={Styles.container}> 
        <ul>
            <li>
                <Link href="/products">
                    Produtos
                </Link>
            </li>
        </ul>
            <h1> Hello World Next.js </h1>
        </div>
    )
}