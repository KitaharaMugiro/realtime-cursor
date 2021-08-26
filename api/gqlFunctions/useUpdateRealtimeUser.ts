

import { useMutation } from "@apollo/client";
import updateRealtimeUserGql from "../gql/updateRealtimeUserGql";

export const useUpdateRealtimeUser = () => {
    return useMutation(
        updateRealtimeUserGql
    )
}