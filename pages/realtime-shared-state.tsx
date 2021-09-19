import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from "react";
import RealtimeHeader from '../components/RealtimeHeader';
import { useRealtimeCursor, useRealtimeSharedState } from '../src';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const [sharedState, setSharedState] = useRealtimeSharedState({ count: 1, boolean: true }, "kazu")

    return (
        <div className={styles.container}>
            <RealtimeHeader />
            <main className={styles.main}>
                <button onClick={() => setSharedState({ ...sharedState, count: sharedState.count + 1 })}>{"setSharedState({...sharedState, count: sharedState.count+1})"}</button>
                <button onClick={() => setSharedState({ ...sharedState, boolean: !sharedState.boolean })}>{"setSharedState({ ...sharedState, boolean: !sharedState.boolean })"}</button>

                <h1 className={styles.title}>
                    {JSON.stringify(sharedState)}
                </h1>
                <h3>
                    And This state is shared by everyone looking at this URL
                </h3>

            </main>
        </div>
    )
}

export default Home
