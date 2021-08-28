import { useSubscription } from "@apollo/client";
import onCreateRealtimeUserGql, { onCreateRealtimeUserResponse } from "../gql/onCreateRealtimeUserGql";

export const useOnCreateRealtimeUser = (url: string): onCreateRealtimeUserResponse => {
    const response = useSubscription(
        onCreateRealtimeUserGql,
        { variables: { url: "URL#" + url } }
    );

    const createdRealtimeUser = response.data?.onCreateRealtimeUser
    return createdRealtimeUser
}