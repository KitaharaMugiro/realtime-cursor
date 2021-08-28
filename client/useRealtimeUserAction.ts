import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { onCreateUserActionResponse } from "../api/gql/onCreateUserActionGql";
import useCreateUserAction from "../api/gqlFunctions/useCreateUserAction";
import useOnCreateUserAction from "../api/gqlFunctions/useOnCreateUserAction";
import { RealtimeUserAction } from "../models/RealtimeUserAction";
import User from "../models/User";
import { updateArray } from "./clientCommonUtils";

const convertResponseToModel = (response: onCreateUserActionResponse): RealtimeUserAction | undefined => {
    if (!response) return undefined
    return { ...response, key: response.SK }
}

export default (callback?: (actionId: string, value: string) => void) => {

    /* URL取得 */
    const router = useRouter()
    const url = router.basePath

    /* create mutation */
    const createUserAction = useCreateUserAction()

    /* subscription */
    const _createdAction = useOnCreateUserAction(url)

    /* 返り値定義 */
    const createdUserAction = convertResponseToModel(_createdAction)

    /* 返り値定義 */
    const [userActionList, setUserActionList] = useState<RealtimeUserAction[]>([])

    /* pushメソッド定義 */
    const pushUserAction = (actionId: string, value: string) => {
        const user = new User()
        createUserAction(url, user.userId, actionId, value)
    }

    /* callbackの実行 */
    useEffect(() => {
        if (!createdUserAction) {
            return
        }
        const actionId = createdUserAction.actionId
        const value = createdUserAction.value
        if (callback) {
            callback(actionId, value)
        }
    }, [_createdAction]) //createdUserActionだと無限ループになるっぽい？

    /* UserActionが追加/更新した際の処理 */
    useEffect(() => {
        if (!createdUserAction) {
            return
        }
        const updatedUserActionList = updateArray(userActionList, createdUserAction)
        setUserActionList(updatedUserActionList)
    }, [_createdAction])

    return { pushUserAction, createdUserAction, userActionList }
}