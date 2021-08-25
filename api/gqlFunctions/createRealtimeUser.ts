

import { gql, useMutation, useQuery } from "@apollo/client";
import createRealtimeUserGql from "../gql/createRealtimeUserGql";

export const useCreateRealtimeUser = () => {
    return useMutation(
        createRealtimeUserGql
    )
}