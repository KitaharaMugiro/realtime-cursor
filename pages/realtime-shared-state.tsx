import type { NextPage } from 'next';
import React from "react";
import RealtimeHeader from '../components/RealtimeHeader';
import { useRealtimeSharedState } from '../src';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const [sharedState, setSharedState] = useRealtimeSharedState({ count: 1, boolean: true }, "kazu")

    const onClickButtonA = () => {
        setSharedState({ ...sharedState, count: sharedState.count + 1 })
    }

    const onClickButtonB = () => {
        setSharedState({ ...sharedState, boolean: !sharedState.boolean })
    }
    return (
        <div className={styles.container}>
            <RealtimeHeader />
            <main className={styles.main}>
                <button onClick={onClickButtonA}>{"setSharedState({...sharedState, count: sharedState.count+1})"}</button>
                <button onClick={onClickButtonB}>{"setSharedState({ ...sharedState, boolean: !sharedState.boolean })"}</button>

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
