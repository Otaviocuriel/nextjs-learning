import head from 'next/head'
import image from 'next/image'
import Styles from '../styles/Home.module.css'  

export default function Home() {
    return (
        <div ClassName={Styles.container}> 
            <h1> Hello World Next.js </h1>
        </div>
    )
}