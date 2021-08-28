import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url: String!, $userId: String!, $name:String, $avator: String) {
                createRealtimeUser(input: {PK: $url, SK: $userId, name: $name, avator: $avator}) {
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