import { gql } from "@apollo/client";

export default gql`
query MyQuery($url: String!) {
    queryRealtimeUser(PK: $url) {
        items {
        SK
        avator
        color
        name
        updatedAt
        }
    }
}
`