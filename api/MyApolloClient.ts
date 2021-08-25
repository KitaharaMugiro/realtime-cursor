import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from '@apollo/client/link/context';

const wsLink = process.browser ? new WebSocketLink({
    uri: 'wss://yrfrr54drrejngccrpaw7gps5q.appsync-api.ap-northeast-1.amazonaws.com/graphql',
    options: {
        reconnect: true
    }
}) : null;

const httpLink = new HttpLink({
    uri: 'https://yrfrr54drrejngccrpaw7gps5q.appsync-api.ap-northeast-1.amazonaws.com/graphql'
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = wsLink ? split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
) : httpLink;

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            "x-api-key": "da2-s55k4p7qinegrpbdtz5zqts6fq",
        }
    }
});


const MyApolloClient = new ApolloClient({
    link: authLink.concat(splitLink),
    headers: { "x-api-key": "da2-s55k4p7qinegrpbdtz5zqts6fq" },
    cache: new InMemoryCache(),
});

export default MyApolloClient;

