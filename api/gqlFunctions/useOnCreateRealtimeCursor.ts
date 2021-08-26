import { useSubscription } from "@apollo/client";
import onCreateRealtimeCursorGql from "../gql/onCreateRealtimeCursorGql";
import onCreateRealtimeUserGql from "../gql/onCreateRealtimeUserGql";

export default (url: string) => {
    return useSubscription(
        onCreateRealtimeCursorGql,
        { variables: { url: "URL#" + url } }
    );
}