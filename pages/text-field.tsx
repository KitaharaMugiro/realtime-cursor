import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from "react";
import useCreateUserAction from '../api/gqlFunctions/useCreateUserAction';
import useOnCreateUserAction from '../api/gqlFunctions/useOnCreateUserAction';
import BottomTextField from '../components/BottomTextField';
import Fukidashi from '../components/Fukidashi';
import User from '../models/User';
import styles from '../styles/Home.module.css';

export async function getServerSideProps(context: any) {
    // URL情報は取れる
    const host = context.req.headers.host
    const path = context.resolvedUrl
    const url = host + path
    return {
        props: {
            url: url
        },
    };

}


const Home: NextPage = (props: any) => {
    const [displayChatList, setDisplayChatList] = useState([])
    const [yourText, setYourText] = useState("")
    const [time, setTime] = useState(0)

    const { url } = props
    const [createUserAction] = useCreateUserAction()

    //Subscription
    const onCreateUserAction = useOnCreateUserAction(url)

    const onChange = (text: string) => {
        setYourText(text)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
            if (!yourText) return
            const user = new User()
            const actionId = "text"
            const actionIdAndUserId = `ActionId#${actionId}UserId#${user.userId}`
            //TODO: urlに"URL#"つけ忘れて気づかなかった。。。。
            //TODO: テキストはsubstringしよう
            createUserAction({ variables: { url: "URL#" + url, actionIdAndUserId, actionId, value: yourText, updatedAt: user.updatedAt } })
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);


    useEffect(() => {
        const createdAction = onCreateUserAction.data?.onCreateUserAction
        if (!createdAction) {
            console.warn(onCreateUserAction.data)
            return
        }
        const SK = createdAction.SK
        const value = createdAction.value
        const updatedAt = createdAction.updatedAt


        const deleteUpdatedUser = displayChatList.filter(d => d.SK !== SK)
        const joined = deleteUpdatedUser.concat({ SK: SK, text: value, updatedAt });


        // １分前の実装としては最悪
        const now = new Date()
        now.setSeconds(now.getSeconds() - 30)
        const latestJoined = joined.filter(i => new Date(i.updatedAt) > now)
        const filtered = latestJoined.filter((element, index, self) =>
            self.findIndex(e =>
                e.SK === element.SK
            ) === index
        );

        filtered.sort(function (a, b) {
            var keyA = a.SK,
                keyB = b.SK;
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        setDisplayChatList(filtered)
    }, [onCreateUserAction.data])

    const renderChats = () => {
        return displayChatList.map(c => {
            return (
                <Fukidashi key={c.SK} text={c.text} />
            )
        })
    }




    return (
        <div className={styles.container_for_chat}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {renderChats()}

            <BottomTextField onChange={onChange} value={yourText} />
        </div>
    )
}

export default Home