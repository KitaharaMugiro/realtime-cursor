import { gql } from "@apollo/client";

export default gql`
        subscription MySubscription($url: String!) {
            onCreateRealtimeCursor(PK: $url) {
                PK
                SK
                x
                y
                updatedAt
                deleteTime
            }
        }
        `
export type onCreateRealtimeCursorResponse = {
    PK: string
    SK: string
    x: number
    y: number
    updatedAt: string
    deleteTime: string
}