import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from "react";
import useRealtimeUserAction from '../src/client/useRealtimeUserAction';
import BottomTextField from '../components/BottomTextField';
import Fukidashi from '../components/Fukidashi';
import RealtimeHeader from '../components/RealtimeHeader';
import styles from '../styles/Home.module.css';
import MiniChat from '../components/MiniChat';

const Home: NextPage = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <RealtimeHeader />
            <div style={
                {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: 200,
                }
            }>
                <MiniChat />
            </div>
        </div>
    )
}

export default Home