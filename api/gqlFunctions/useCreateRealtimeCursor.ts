

import { gql, useMutation, useQuery } from "@apollo/client";
import createRealtimeCursorGql from "../gql/createRealtimeCursorGql";
import createRealtimeUserGql from "../gql/createRealtimeUserGql";

export default () => {
    const [createRealtimeCursor] = useMutation(
        createRealtimeCursorGql
    )

    return (url: string, userId: string, x: number, y: number) => {
        createRealtimeCursor(
            {
                variables:
                {
                    url: "URL#" + url, userId: "UserId#" + userId,
                    x, y,
                }
            })
    }
}