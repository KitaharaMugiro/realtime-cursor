import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useCreateRealtimeUser } from "../api/gqlFunctions/useCreateRealtimeUser";
import { useOnCreateRealtimeUser } from "../api/gqlFunctions/useOnCreateRealtimeUser";
import { listRealtimeUser } from "../api/gqlFunctions/listRealtimeUsers";
import User from "../models/User";
import { OnlineUser } from "../models/OnlineUser";
import { queryRealtimeUserResponse } from "../api/gql/queryRealtimeUserGql";
import { deleteDuplicateKey, filteringOutByDeletetime, updateArray } from "./clientCommonUtils";

const convertResponseToModel = (response: queryRealtimeUserResponse[0]): OnlineUser => {
    return { ...response, key: response.SK }
}


export default () => {

    /* 定数 */
    const POKE_INTERVAL_MILLISEC = 5005

    /* URL取得 */
    const router = useRouter()
    const url = router.basePath

    /* 返り値定義 */
    const [onlineUserList, setOnlineUserList] = useState<OnlineUser[]>([])

    /* create mutation */
    const createRealtimeUser = useCreateRealtimeUser()

    /* subscription */
    const createdUser = useOnCreateRealtimeUser(url)


    useEffect(() => {
        const getInitialOnlineUser = async () => {
            const initialOnlineUserList = await listRealtimeUser(url)
            const models = initialOnlineUserList.map(a => convertResponseToModel(a))
            const filteredModels = filteringOutByDeletetime(models)
            setOnlineUserList(filteredModels)
        }

        getInitialOnlineUser()
        const user = new User()
        createRealtimeUser(url, user.userId, user.name, user.avator)
    }, [])


    /**定期的なpoke */
    useEffect(() => {
        setInterval(() => {
            const user = new User()
            createRealtimeUser(url, user.userId, user.name, user.avator)
        }, POKE_INTERVAL_MILLISEC)
    }, [])


    /** OnlineUserが追加/更新した際の処理 */
    useEffect(() => {
        if (!createdUser) {
            return
        }
        const createdUserModel = convertResponseToModel(createdUser)
        const newOnlineUserList = updateArray(onlineUserList, createdUserModel)
        const filteredModels = filteringOutByDeletetime(newOnlineUserList)
        setOnlineUserList(filteredModels)
    }, [createdUser])

    return onlineUserList

}