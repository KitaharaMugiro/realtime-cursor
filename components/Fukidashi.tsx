import style from "./fukidashi.module.css"

interface Props {
    text: string
}

export default (props: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <div className={style.arrow_box}>{props.text}</div>

            <div style={{ width: 40, marginTop: 20, fontSize: 40 }}>
                😄
            </div>

        </div>
    )
}