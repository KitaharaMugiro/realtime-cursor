import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import NormalButton from '../components/NormalButton';
//import useRealtimeUserAction from '../src/client/useRealtimeUserAction';
import { useRealtimeUserAction } from 'realtimely';
import RealtimeHeader from '../components/RealtimeHeader';
// import styles from '../styles/Home.module.css';
// import style from "./button.module.css";
let styles = require('../styles/Home.module.css')
let style = require("./button.module.css")


const Home: NextPage = () => {
    const [fire1, setFire1] = useState(false)
    const [fire2, setFire2] = useState(false)
    const [fire3, setFire3] = useState(false)

    //callback式の記述
    const { pushUserAction } = useRealtimeUserAction((actionId: string, value: string) => {
        if (actionId === "button_1") {
            setFire1(true)
        } else if (actionId === "button_2") {
            setFire2(true)
        } else if (actionId === "button_3") {
            setFire3(true)
        }
    })

    const onClick = (actionId: string) => {
        pushUserAction(actionId, "clicked")
    }

    return (
        <div className={styles.container}>
            <RealtimeHeader />

            <main className={styles.main}>

                <CSSTransition
                    in={!fire1}
                    timeout={500}
                    onExited={() => setFire1(false)}
                    classNames={{
                        enterActive: style.enterActive,
                        enterDone: style.enterDone,
                        exitActive: style.exitActive,
                        exitDone: style.exitDone
                    }}>
                    <NormalButton onClick={() => onClick("button_1")} />
                </CSSTransition>
                <div style={{ height: 10 }} />
                <CSSTransition
                    in={!fire2}
                    timeout={500}
                    onExited={() => setFire2(false)}
                    classNames={{
                        enterActive: style.enterActive,
                        enterDone: style.enterDone,
                        exitActive: style.exitActive,
                        exitDone: style.exitDone
                    }}>
                    <NormalButton onClick={() => onClick("button_2")} />
                </CSSTransition>
                <div style={{ height: 10 }} />

                <CSSTransition
                    in={!fire3}
                    timeout={500}
                    onExited={() => setFire3(false)}
                    classNames={{
                        enterActive: style.enterActive,
                        enterDone: style.enterDone,
                        exitActive: style.exitActive,
                        exitDone: style.exitDone
                    }}>
                    <NormalButton onClick={() => onClick("button_3")} />
                </CSSTransition>


            </main>
        </div>
    )
}

export default Home