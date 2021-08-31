"use strict";
exports.__esModule = true;
exports.useOnCreateRealtimeUser = void 0;
var client_1 = require("@apollo/client");
var onCreateRealtimeUserGql_1 = require("../gql/onCreateRealtimeUserGql");
var MyApolloClient_1 = require("../MyApolloClient");
var useOnCreateRealtimeUser = function (url) {
    var _a;
    var response = client_1.useSubscription(onCreateRealtimeUserGql_1["default"], { variables: { url: "URL#" + url }, client: MyApolloClient_1["default"] });
    var createdRealtimeUser = (_a = response.data) === null || _a === void 0 ? void 0 : _a.onCreateRealtimeUser;
    return createdRealtimeUser;
};
exports.useOnCreateRealtimeUser = useOnCreateRealtimeUser;
