

import { useMutation } from "@apollo/client";
import createUserActionGql from "../gql/createUserActionGql";

export default () => {
    const [createUserAction] = useMutation(
        createUserActionGql
    )
    return (url: string, userId: string, actionId: string, value: string) => {
        const actionIdAndUserId = `ActionId#${actionId}UserId#${userId}`
        createUserAction({
            variables: {
                url: "URL#" + url,
                actionIdAndUserId,
                actionId,
                value
            }
        })
    }
}