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
export type onCreateUserActionResponse = {
    PK: string
    SK: string
    actionId: string
    value: string
    updatedAt: string
    deleteTime: string
}