
import { useEffect, useState } from "react";
import useCreateRealtimeSharedState from "../api/gqlFunctions/useCreateRealtimeSharedState";
import useOnCreateRealtimeSharedState from "../api/gqlFunctions/useOnCreateRealtimeSharedState";


export default <T>(defaultValue: T, actionId: string): [T, (value: T) => void] => {

    /* URL取得 */
    if (typeof window === "undefined") return [undefined, undefined]


    const host = window.location.host
    const path = window.location.pathname
    const url = host + path

    /* create mutation */
    const createRealtimeSharedState = useCreateRealtimeSharedState()

    /* subscription */
    const createdRealtimeSharedState = useOnCreateRealtimeSharedState(url, actionId)

    /* 返り値定義 */
    const [value, setValue] = useState<T>(defaultValue)

    /* pushメソッド定義 */
    const pushValue = (value: T) => {
        createRealtimeSharedState(url, actionId, JSON.stringify(value))
    }

    /* callbackの実行 */
    useEffect(() => {
        console.log("action created")
        if (!createdRealtimeSharedState) {
            return
        }
        console.log("action is created")
        const _actionId = createdRealtimeSharedState.actionId
        if (_actionId !== actionId) return
        console.log("action id match")
        const _value = JSON.parse(createdRealtimeSharedState.value) as T
        setValue(_value)
    }, [createdRealtimeSharedState])


    return [value, pushValue]
}