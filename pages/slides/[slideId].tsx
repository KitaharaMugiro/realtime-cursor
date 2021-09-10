import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import MiniChat from "../../components/MiniChat"
import { useRealtimeCursor, useRealtimeSharedState } from "../../src"
import style from "./style.module.css"

const Page = () => {
    const router = useRouter()
    const { slideId, admin } = router.query

    //制御変数
    const [customizeWidth, setWidth] = useState(950)

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        picNumber: 1,
        enableCursor: false,
        enableChat: false
    }, "slideState")
    if (!slideState) return <div >loading</div>

    const goNext = () => {
        slideState.picNumber += 1
        setSlideState(slideState)
    }

    const goPrevious = () => {
        slideState.picNumber -= 1
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
    // let picturePath = "/slides_pic/" + slideId + "/スライド" + slideState.picNumber + ".png"
    // if (slideState.picNumber == 4) {
    //     picturePath = "/slides_pic/" + slideId + "/スライド" + slideState.picNumber + ".gif"
    // }
    //なぜかCloudFrontはディレクトリを切ると404になるので。。
    let picturePath = "/スライド" + slideState.picNumber + ".png"
    if (slideState.picNumber == 4) {
        picturePath = "/スライド" + slideState.picNumber + ".gif"
    }
    const pictureUrl = "url(" + picturePath + ")"

    //スライドサイズは16:9, 4:3から選ぶ
    const width = customizeWidth + "px"
    const height = (customizeWidth / 16 * 9) + "px"
    const sizeStyle = { width, height }
    const imageSizeStyle = { width, height, backgroundSize: `${width} ${height}` }

    return (
        <div className={style.main}>
            {/* Adminコントロール */}
            {admin ? <div>
                <button onClick={goPrevious}>前へ</button>
                <button onClick={goNext}>次へ</button>
                <button onClick={toggleCursor}>カーソル {slideState.enableCursor ? "OFF" : "ON"}</button>
                <button onClick={toggleChat}>チャット {slideState.enableChat ? "OFF" : "ON"}</button>
            </div> : <div />}

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

        </div>
    )

}

export default Page