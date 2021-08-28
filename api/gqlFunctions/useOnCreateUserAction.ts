import { useSubscription } from "@apollo/client";
import onCreateRealtimeUserGql from "../gql/onCreateRealtimeUserGql";
import onCreateUserActionGql, { onCreateUserActionResponse } from "../gql/onCreateUserActionGql";

export default (url: string): onCreateUserActionResponse => {
    const response = useSubscription(
        onCreateUserActionGql,
        { variables: { url: "URL#" + url } }
    );

    const createdUserAction = response.data?.onCreateUserAction
    return createdUserAction
}