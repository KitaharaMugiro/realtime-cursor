import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import queryRealtimeUserGql from "../api/gql/queryRealtimeUserGql";
import { useCreateRealtimeUser } from "../api/gqlFunctions/useCreateRealtimeUser";
import { useOnCreateRealtimeUser } from "../api/gqlFunctions/useOnCreateRealtimeUser";
import { useQueryRealtimeUser } from "../api/gqlFunctions/useQueryRealtimeUsers";
import MyApolloClient from "../api/MyApolloClient";
import User from "../models/User";

export default () => {

    /** URL取得 */
    const router = useRouter()
    const url = router.basePath


    const [onlineUserList, setOnlineUserList] = useState([])
    const createRealtimeUser = useCreateRealtimeUser()
    const createdUser = useOnCreateRealtimeUser(url)


    useEffect(() => {
        const getInitialOnlineUser = async () => {
            const initialOnlineUserList = await useQueryRealtimeUser(url)
            //TODO: deleteTimeによるフィルタリング
            setOnlineUserList(initialOnlineUserList)
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
        }, 5000)
    }, [])


    /** OnlineUserが追加/更新した際の処理 */
    useEffect(() => {
        if (!createdUser) {
            return
        }
        const deleteUpdatedUser = onlineUserList.filter(d => d.SK !== createdUser.SK && new Date(d.deleteTime) > new Date())
        const joined = deleteUpdatedUser.concat(createdUser);
        const filtered = joined.filter((element, index, self) =>
            self.findIndex(e =>
                e.SK === element.SK
            ) === index
        );
        setOnlineUserList(filtered)
    }, [createdUser])

    return onlineUserList

}