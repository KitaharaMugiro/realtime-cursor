import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($url: String!) {
            onCreateRealtimeUser(PK: $url) {
                PK
                SK
                avator
                color
                name
                updatedAt
                deleteTime
            }
        }
        `