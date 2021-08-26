import { useSubscription } from "@apollo/client";
import onCreateRealtimeUserGql from "../gql/onCreateRealtimeUserGql";

export const useOnCreateRealtimeUser = (url: string) => {
    return useSubscription(
        onCreateRealtimeUserGql,
        { variables: { url: "URL#" + url } }
    );
}