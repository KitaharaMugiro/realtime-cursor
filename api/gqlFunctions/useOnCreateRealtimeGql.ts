import { useSubscription } from "@apollo/client";
import onCreateRealtimeUserGql from "../gql/onCreateRealtimeUserGql";

export const useOnCreateRealtimeGql = (url: string) => {
    return useSubscription(
        onCreateRealtimeUserGql,
        { variables: { url: "URL#" + url } }
    );
}