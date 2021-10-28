import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from "react";
import RealtimeHeader from '../components/RealtimeHeader';
import { useRealtimeCursor } from '../src';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const { onMouseMove, renderCursors } = useRealtimeCursor(100)

    /**カスタムビューを設定したい場合 */
    // const customView = (param: CustomCursorViewParameter) => {
    //     return (<CursorEye userInfo={param.userInfo} />)
    // }

    return (
        <div className={styles.container} onMouseMove={onMouseMove}>
            <RealtimeHeader />
            <main className={styles.main}>
                {renderCursors()}
                <h1 className={styles.title}>
                    Hey! Let's talk in <Link href="/text-field"><a>Realtime Chat</a></Link>
                </h1>
            </main>
        </div>
    )
}

export default Home
