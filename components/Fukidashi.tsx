import style from "./fukidashi.module.css"

interface Props {
    text: string
    avator: string
    name: string
    color: string
}

export default (props: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <div className={style.arrow_box} style={{ backgroundColor: props.color }}>
                {props.text}
                <div className={style.arrow_box_after} style={{ borderTopColor: props.color }}></div>
            </div>


            <div style={{ display: "flex", alignItems: "flex-end", width: 40, marginTop: 20, fontSize: 40 }}>
                <div>{props.avator}</div>
                <div style={{ fontSize: "12px" }}>{props.name}</div>
            </div>

        </div>
    )
}