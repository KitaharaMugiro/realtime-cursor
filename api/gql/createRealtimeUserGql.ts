import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url: String!, $userId: String!, $name:String, $avator: String, $updatedAt:String) {
                createRealtimeUser(input: {PK: $url, SK: $userId, name: $name, avator: $avator, updatedAt: $updatedAt}) {
                    PK
                    SK
                    avator
                    color
                    name
                    updatedAt
            }          
        }
        `