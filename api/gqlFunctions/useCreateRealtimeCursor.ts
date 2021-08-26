

import { gql, useMutation, useQuery } from "@apollo/client";
import createRealtimeCursorGql from "../gql/createRealtimeCursorGql";
import createRealtimeUserGql from "../gql/createRealtimeUserGql";

export default () => {
    return useMutation(
        createRealtimeCursorGql
    )
}