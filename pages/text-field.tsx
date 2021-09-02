import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from "react";
//import useRealtimeUserAction from '../src/client/useRealtimeUserAction';
import { useRealtimeUserAction } from 'realtimely';
import BottomTextField from '../components/BottomTextField';
import Fukidashi from '../components/Fukidashi';
import RealtimeHeader from '../components/RealtimeHeader';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const [displayChatList, setDisplayChatList] = useState<{ key: string, text: string }[]>([])
    const [yourText, setYourText] = useState("")
    const [time, setTime] = useState(0)


    const { pushUserAction, userActionList } = useRealtimeUserAction()

    const onChange = (text: string) => {
        setYourText(text)
    }

    useEffect(() => {
        const messeges = userActionList.map(u => {
            return {
                key: u.key,
                text: u.value
            }
        })
        setDisplayChatList(messeges)
    }, [userActionList])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!pushUserAction) return
            setTime(time + 1);
            if (!yourText) return
            const actionId = "text"
            pushUserAction(actionId, yourText)
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);

    const renderChats = () => {
        return displayChatList.map(c => {
            return (
                <Fukidashi key={c.key} text={c.text} />
            )
        })
    }

    return (
        <div className={styles.container_for_chat}>
            <RealtimeHeader />
            {renderChats()}

            <BottomTextField onChange={onChange} value={yourText} />
        </div>
    )
}

export default Home