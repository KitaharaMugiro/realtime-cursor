import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($url: String!) {
            onCreateRealtimeCursor(PK: $url) {
                PK
                SK
                x
                y
                updatedAt
            }
        }
        `