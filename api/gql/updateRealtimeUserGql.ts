import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url: String!, $userId: String!, $updatedAt:String) {
                updateRealtimeUser(input: {PK: $url, SK: $userId, updatedAt: $updatedAt}) {
                    PK
                    SK
                    avator
                    color
                    name
                    updatedAt
            } 
        }
        `