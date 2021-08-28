

import { gql, useMutation, useQuery } from "@apollo/client";
import createRealtimeUserGql from "../gql/createRealtimeUserGql";

export const useCreateRealtimeUser = () => {
    const [createRealtimeUser] = useMutation(
        createRealtimeUserGql
    )

    return (url: string, userId: string, name: string, avator: string, color: string) => {
        createRealtimeUser({
            variables:
            {
                url: "URL#" + url,
                userId: "UserId#" + userId,
                name: name,
                avator: avator,
                color: color

            }
        })
    }
}