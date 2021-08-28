

import { useMutation } from "@apollo/client";
import createUserActionGql from "../gql/createUserActionGql";

export default () => {
    return useMutation(
        createUserActionGql
    )
}