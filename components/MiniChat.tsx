import type { NextPage } from 'next';
import React, { useEffect, useState } from "react";
import useRealtimeUserAction from '../src/client/useRealtimeUserAction';
import styles from '../styles/Home.module.css';
import MiniBottomTextField from './MiniBottomTextField';
import MiniFukidashi from './MiniFukidashi';

const MiniChat = () => {
    const [yourText, setYourText] = useState("")
    const [prevText, setPrevText] = useState("")
    const [time, setTime] = useState(0)

    const { pushUserAction, userActionList } = useRealtimeUserAction()

    const onChange = (text: string) => {
        setYourText(text)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!pushUserAction) return
            const actionId = "text"
            setTime(time + 1)
            if (yourText === prevText) return
            console.log("API pushed")
            pushUserAction(actionId, yourText)
            setPrevText(yourText)
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [time]);

    const renderChats = () => {
        return userActionList.map(c => {
            if (!c.value) return <div key={c.key} />
            return (
                <MiniFukidashi
                    key={c.key} text={c.value} avator={c.avator} color={c.color} name={c.name} />
            )
        })
    }

    return (
        <div style={{
            height: "100vh",
            padding: "0 0.5rem",
            overflow: "scrollY"
        }}>
            {renderChats()}
            <MiniBottomTextField onChange={onChange} value={yourText} />
        </div>
    )
}

export default MiniChat