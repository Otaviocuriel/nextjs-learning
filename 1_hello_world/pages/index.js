import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Styles from '../styles/Home.module.css'  

export default function Home() {
    return (
        <div ClassName={Styles.container}> 
            <h1> Hello World Next.js </h1>
        </div>
    )
}