import type { NextPage } from 'next';
import React from "react";
import RealtimeHeader from '../components/RealtimeHeader';
let styles = require('../styles/Home.module.css')

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <RealtimeHeader />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Watch the upper right,
                    they are companions who are looking at this page together...
                </h1>
            </main>
        </div>
    )
}

export default Home
