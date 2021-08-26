import { gql } from "@apollo/client";

export default gql`
            mutation MyMutation($url: String!, $userId: String!, $x:Float, $y: Float, $updatedAt:String) {
                createRealtimeCursor(input: {PK: $url, SK: $userId, x: $x, y: $y, updatedAt: $updatedAt}) {
                    PK
                    SK
                    x
                    y
                    updatedAt
            }          
        }
        `