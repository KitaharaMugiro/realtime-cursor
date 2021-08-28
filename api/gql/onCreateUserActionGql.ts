import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($url: String!) {
            onCreateUserAction(PK: $url) {
                PK
                SK
                actionId
                value
                updatedAt
                deleteTime
            }
        }
        `