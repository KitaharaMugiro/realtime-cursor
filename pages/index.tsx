import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import RealtimeHeader from '../components/RealtimeHeader'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <RealtimeHeader />
      <main className={styles.main}>
        <div style={{ height: "30px" }}></div>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.npmjs.com/package/realtimely">Realtimely</a> demo!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Get started by choosing appealing one below.</code>
        </p>

        <div className={styles.grid}>
          <Link href="/user-test">
            <a className={styles.card}>
              <h2>User presence &rarr;</h2>
              <p>You can see who is looking at this site.</p>
            </a>
          </Link>

          <Link href="/realtime-cursor-test">
            <a className={styles.card}>
              <h2>Realtime Mouse Cursor &rarr;</h2>
              <p>You can see how other people are moving their mouse</p>
            </a>
          </Link>

          <Link href="/text-field">
            <a className={styles.card}>
              <h2>Realtime Chat For Real &rarr;</h2>
              <p>Litterary realtime chat, for real</p>
            </a>
          </Link>

          <Link href="/user-action">
            <a className={styles.card}>
              <h2>Visible User Actions &rarr;</h2>
              <p>Buttons that reacts when someone presses it</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
