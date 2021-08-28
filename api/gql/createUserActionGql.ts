import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url:String!,  $actionIdAndUserId: String!, $actionId:String, $value: String) {
                createUserAction(input: {PK: $url, SK: $actionIdAndUserId, actionId: $actionId, value: $value}) {
                    PK
                    SK
                    actionId
                    value
                    updatedAt
                    deleteTime
            }
        }
        `