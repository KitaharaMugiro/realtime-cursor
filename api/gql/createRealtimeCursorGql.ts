import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url: String!, $userId: String!, $x:Float, $y: Float) {
                createRealtimeCursor(input: {PK: $url, SK: $userId, x: $x, y: $y}) {
                    PK
                    SK
                    x
                    y
                    updatedAt
                    deleteTime
            }          
        }
        `