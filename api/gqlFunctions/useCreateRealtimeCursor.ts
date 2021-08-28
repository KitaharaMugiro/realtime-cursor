

import { gql, useMutation, useQuery } from "@apollo/client";
import createRealtimeCursorGql from "../gql/createRealtimeCursorGql";
import createRealtimeUserGql from "../gql/createRealtimeUserGql";

export default () => {
    const [createRealtimeCursor] = useMutation(
        createRealtimeCursorGql
    )

    return (url: string, userId: string, x: number, y: number, name: string, avator: string, color: string) => {
        createRealtimeCursor(
            {
                variables:
                {
                    url: "URL#" + url, userId: "UserId#" + userId,
                    x, y, name, avator, color
                }
            })
    }
}