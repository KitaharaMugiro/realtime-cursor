import { useRouter } from "next/dist/client/router"
import { useState } from "react"
import { useRealtimeCursor, useRealtimeSharedState } from "../../src"
import style from "./style.module.css"

const Page = () => {
    const router = useRouter()
    const { slideId, admin } = router.query

    //制御変数
    const [customizeWidth, setWidth] = useState(750)

    //slide状態変数
    const [slideState, setSlideState] = useRealtimeSharedState({
        picNumber: 1,
        enableCursor: false
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

    //カーソル
    const { onMouseMove, renderCursors } = useRealtimeCursor()

    //画像Path
    const picturePath = "/slides/" + slideId + "/スライド" + slideState.picNumber + ".png"
    const pictureUrl = "url(" + picturePath + ")"

    //スライドサイズは16:9, 4:3から選ぶ
    const width = customizeWidth + "px"
    const height = (customizeWidth / 4 * 3) + "px"
    const sizeStyle = { width, height }
    const imageSizeStyle = { width, height, backgroundSize: `${width} ${height}` }

    return (
        <div className={style.main}>
            {/* Adminコントロール */}
            {admin ? <div>
                <button onClick={goNext}>次へ</button>
                <button onClick={goPrevious}>前へ</button>
            </div> : <div />}

            {/* スライド */}
            <div className={style.center}>
                <div className={style.paper} style={sizeStyle} onMouseMove={onMouseMove}>
                    {renderCursors()}
                    <div
                        className={style.picture}
                        style={{ backgroundImage: pictureUrl, ...imageSizeStyle }}
                    />
                </div>
            </div>

            {/* チャット */}

        </div>
    )

}

export default Page