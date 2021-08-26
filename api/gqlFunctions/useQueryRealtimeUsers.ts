import { gql, useQuery } from "@apollo/client";
import queryRealtimeUserGql from "../gql/queryRealtimeUserGql";

export const useQueryRealtimeUser = (url: string) => {
    return useQuery(
        queryRealtimeUserGql
        , { variables: { url: "URL#" + url } }
    )
}