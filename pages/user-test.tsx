import type { NextPage } from 'next';
import React from "react";
import UserList from "../components/UserList";
import useOnlineUsers from '../src/client/useOnlineUsers';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const { onlineUserList } = useOnlineUsers()

    return (
        <div className={styles.container}>
            <header className="header">
                <h1 className="header_text">
                    <a href="/" className="link_text">俺のサイト</a>
                </h1>

                <nav className="nav">
                    <ul className="ul">
                        <div>
                            <UserList realtimeUser={onlineUserList} />
                        </div>
                    </ul>
                </nav>
            </header>


            <main className={styles.main}>
                <h1 className={styles.title}>
                    右上にオンラインのユーザを表示
                </h1>
            </main>
        </div>
    )
}

export default Home
