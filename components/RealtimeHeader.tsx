import UserList from "./UserList";
import { useOnlineUsers } from '../src';
import React from "react";
import Head from "next/head";

export default () => {
    const { onlineUserList } = useOnlineUsers()
    return (
        <header className="header">
            <Head>
                {onlineUserList ?
                    <title>Realtimely Demo({onlineUserList.length} viewers)</title>
                    : <title>Realtimely Demo</title>}

            </Head>
            <h1 className="header_text">
                <a href="/" className="link_text">Realtimely</a>
            </h1>

            <nav className="nav">
                <ul className="ul">
                    <div>
                        <UserList realtimeUser={onlineUserList} />
                    </div>
                </ul>
            </nav>
        </header>
    )
}