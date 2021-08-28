import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { onCreateRealtimeCursorResponse } from "../api/gql/onCreateRealtimeCursorGql"
import useCreateRealtimeCursor from "../api/gqlFunctions/useCreateRealtimeCursor"
import useOnCreateRealtimeCursor from "../api/gqlFunctions/useOnCreateRealtimeCursor"
import { RealtimeCursor } from "../models/RealtimeCursor"
import User from "../models/User"
import { updateArray } from "./clientCommonUtils"

const convertResponseToModel = (response: onCreateRealtimeCursorResponse): RealtimeCursor | undefined => {
    if (!response) return undefined
    return { ...response, key: response.SK }
}


export default () => {
    /* URL取得 */
    const router = useRouter()
    const url = router.basePath


    const [cursorList, setCursorList] = useState<RealtimeCursor[]>([])

    const createRealtimeCursor = useCreateRealtimeCursor()

    //Subscription
    const _createdCursor = useOnCreateRealtimeCursor(url)
    const createdCursor = convertResponseToModel(_createdCursor)

    useEffect(() => {
        if (!createdCursor) {
            return
        }
        const newDisplayCursorList = updateArray(cursorList, createdCursor)
        setCursorList(newDisplayCursorList)
    }, [createdCursor])


    /* pushメソッド定義 */
    const pushRealtimeCursor = (x: number, y: number) => {
        const user = new User()
        createRealtimeCursor(url, user.userId, x, y, user.name, user.avator, user.color)
    }

    return { pushRealtimeCursor, cursorList }

}