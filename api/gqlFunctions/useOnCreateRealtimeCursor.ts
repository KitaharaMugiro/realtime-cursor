import { useSubscription } from "@apollo/client";
import onCreateRealtimeCursorGql, { onCreateRealtimeCursorResponse } from "../gql/onCreateRealtimeCursorGql";

export default (url: string): onCreateRealtimeCursorResponse => {
    const response = useSubscription(
        onCreateRealtimeCursorGql,
        { variables: { url: "URL#" + url } }
    );

    const createdRealtimeCursor = response?.data?.onCreateRealtimeCursor
    return createdRealtimeCursor
}