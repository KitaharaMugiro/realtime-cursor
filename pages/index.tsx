import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import RealtimeHeader from '../components/RealtimeHeader'
import styles from '../styles/Home.module.css'

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
          <code className={styles.code}>npm install realtimely</code>
          <br />
          <a href="https://kitaharamugiro.github.io/Realtimely/">Documents</a><br />
          <a href="https://github.com/KitaharaMugiro/realtime-cursor">Source code</a>
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

          <Link href="/realtime-shared-state">
            <a className={styles.card}>
              <h2>Realtime Shared State &rarr;</h2>
              <p>evolutionary useState</p>
            </a>
          </Link>

          <Link href="/user-action">
            <a className={styles.card}>
              <h2>Visible User Actions &rarr;</h2>
              <p>Buttons that reacts when someone presses it</p>
            </a>
          </Link>

          <Link href="/slides/sample?admin=true">
            <a className={styles.card}>
              <h2>Slide Share &rarr;</h2>
              <p>You can create a slide sharing site by combining samples</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
