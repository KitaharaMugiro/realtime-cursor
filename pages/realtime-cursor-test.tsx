import type { NextPage } from 'next';
import Head from 'next/head';
import React from "react";
import RealtimeHeader from '../components/RealtimeHeader';
import { useRealtimeCursor } from '../src';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const { onMouseMove, renderCursors } = useRealtimeCursor()

    /**カスタムビューを設定したい場合 */
    // const customView = (param: CustomCursorViewParameter) => {
    //     return (<CursorEye userInfo={param.userInfo} />)
    // }

    return (
        <div className={styles.container} onMouseMove={onMouseMove}>
            <RealtimeHeader />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                {renderCursors()}
            </main>
        </div>
    )
}

export default Home
