import {ReactNode} from 'react';
import Link from 'next/link';
import styles from './MainLayout.module.css'
import Head from 'next/head';

export const MainLayout: React.FC<MainLayoutProps> = ({children,title=''}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav className={styles.nav}>
                <Link href="/request"><a>Request</a></Link>
                <Link href="/form"><a>Form</a></Link>
                <Link href="/image"><a>Optimized image</a></Link>
                <Link href="/timer"><a>Timer</a></Link>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

//  interfaces

interface MainLayoutProps {
    children: ReactNode
    title: string
}
