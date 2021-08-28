import { useSubscription } from "@apollo/client";
import onCreateRealtimeUserGql from "../gql/onCreateRealtimeUserGql";
import onCreateUserActionGql from "../gql/onCreateUserActionGql";

export default (url: string) => {
    return useSubscription(
        onCreateUserActionGql,
        { variables: { url: "URL#" + url } }
    );
}