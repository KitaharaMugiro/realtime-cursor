import { useSubscription } from "@apollo/client";
import onUpdateRealtimeUserGql from "../gql/onUpdateRealtimeUserGql";

export const useOnUpdateRealtimeUser = (url: string) => {
    return useSubscription(
        onUpdateRealtimeUserGql,
        { variables: { url: "URL#" + url } }
    );
}