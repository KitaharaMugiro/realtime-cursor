import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import RealtimeHeader from '../components/RealtimeHeader';
import { useRealtimeCursor } from '../src';
import styles from '../styles/Home.module.css';
import { v4 as uuidv4 } from "uuid";
import { CursorAnimate, CustomCursorViewParameter } from '../src/components/CursorAnimate';
import { Cursor } from '../src/components/Cursor';
const Home: NextPage = () => {
    const [customUserInfo, setCustomeUserInfo] = useState({ name: "", id: "" })
    const { onMouseMove, renderCursors } = useRealtimeCursor(100, JSON.stringify(customUserInfo))

    useEffect(() => {
        const id = uuidv4()
        const name = id.substring(0, 5)
        setCustomeUserInfo({ name, id })
    }, [])

    /**カスタムビューを設定したい場合 */
    const customView = (param: CustomCursorViewParameter) => {
        console.log({ customInfo: param.customInfo })
        return (<Cursor userInfo={param.userInfo} />)
    }

    return (
        <div className={styles.container} onMouseMove={onMouseMove}>
            <RealtimeHeader />
            <main className={styles.main}>
                {renderCursors(customView)}
                <h1 className={styles.title}>
                    Hey! Let's talk in <Link href="/text-field"><a>Realtime Chat</a></Link>
                </h1>
            </main>
        </div>
    )
}

export default Home
