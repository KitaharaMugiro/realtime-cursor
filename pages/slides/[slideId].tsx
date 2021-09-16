import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import MiniChat from "../../components/MiniChat"
import RealtimeHeader from "../../components/RealtimeHeader"
import { useRealtimeCursor, useRealtimeSharedState, useRealtimeUserAction } from "../../src"
import style from "./style.module.css"
import { CSSTransition } from 'react-transition-group';
import NormalButton from "../../components/NormalButton"

const Page = () => {
    const router = useRouter()
    const { slideId, admin } = router.query

    //制御変数
    const [customizeWidth, setWidth] = useState(950)

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        picNumber: 1,
        enableCursor: false,
        enableChat: false,
        clicked: 0
    }, "slideState")

    const goNext = () => {
        slideState.picNumber += 1
        setSlideState(slideState)
    }

    const goPrevious = () => {
        slideState.picNumber -= 1
        setSlideState(slideState)
    }

    const goStart = () => {
        slideState.picNumber = 1
        setSlideState(slideState)
    }

    const toggleCursor = () => {
        slideState.enableCursor = !slideState.enableCursor
        setSlideState(slideState)
    }

    const toggleChat = () => {
        slideState.enableChat = !slideState.enableChat
        setSlideState(slideState)
    }

    //カーソル
    const { onMouseMove, renderCursors } = useRealtimeCursor()

    //画像Path
    let picturePath = "/static/slides_pic/" + slideId + "/slide" + slideState.picNumber + ".png"
    if (slideState.picNumber == 6) {
        picturePath = "/static/slides_pic/" + slideId + "/slide" + slideState.picNumber + ".gif"
    }

    const pictureUrl = "url(" + picturePath + ")"

    //スライドサイズは16:9, 4:3から選ぶ
    const width = customizeWidth + "px"
    const height = (customizeWidth / 16 * 9) + "px"
    const sizeStyle = { width, height }
    const imageSizeStyle = { width, height, backgroundSize: `${width} ${height}` }

    //callback式の記述
    const { pushUserAction } = useRealtimeUserAction((actionId: string, value: string) => {
        if (actionId === "button_1") {
            setFire1(true)
        }
    })
    const [fire1, setFire1] = useState(false)
    const onClick = (actionId: string) => {
        pushUserAction(actionId, "clicked")
        if (!slideState.clicked) slideState.clicked = 0
        slideState.clicked += 1
        setSlideState(slideState)
    }

    const resetNice = () => {
        slideState.clicked = 0
        setSlideState(slideState)
    }

    return (
        <div className={style.main}>

            {/* Adminコントロール */}
            {admin ? <div>
                <button onClick={goStart}>Back to beginning</button>
                <button onClick={goPrevious}>Previous</button>
                <button onClick={goNext}>Next</button>
                <button onClick={toggleCursor}>{slideState.enableCursor ? "Disable" : "Enable"} Cursor</button>
                <button onClick={toggleChat}>{slideState.enableChat ? "Disable" : "Enable"} Chat</button>
                <button onClick={resetNice}>Reset nice</button>

            </div> : <RealtimeHeader />}

            {/* スライド */}
            <div className={style.center}>
                <div className={style.paper} style={sizeStyle} onMouseMove={onMouseMove}>
                    {slideState.enableCursor ? renderCursors() : <div />}
                    <div
                        className={style.picture}
                        style={{ backgroundImage: pictureUrl, ...imageSizeStyle }}
                    />
                </div>
            </div>

            {/* チャット */}
            <div style={
                {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: 250,
                }
            }>
                {slideState.enableChat ? <MiniChat /> : <div />}
            </div>

            <div style={{ position: "absolute", left: 3, bottom: 3 }}>
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
                    <NormalButton onClick={() => onClick("button_1")} text={"LIKE " + slideState.clicked} />
                </CSSTransition>
            </div>


        </div>
    )

}

export default Page