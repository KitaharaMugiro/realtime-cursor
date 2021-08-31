"use strict";
exports.__esModule = true;
exports.useCreateRealtimeUser = void 0;
var client_1 = require("@apollo/client");
var createRealtimeUserGql_1 = require("../gql/createRealtimeUserGql");
var MyApolloClient_1 = require("../MyApolloClient");
var useCreateRealtimeUser = function () {
    var createRealtimeUser = client_1.useMutation(createRealtimeUserGql_1["default"], { client: MyApolloClient_1["default"] })[0];
    return function (url, userId, name, avator, color) {
        createRealtimeUser({
            variables: {
                url: "URL#" + url,
                userId: "UserId#" + userId,
                name: name,
                avator: avator,
                color: color
            }
        });
    };
};
exports.useCreateRealtimeUser = useCreateRealtimeUser;
