"use strict";
exports.__esModule = true;
var client_1 = require("@apollo/client");
var onCreateUserActionGql_1 = require("../gql/onCreateUserActionGql");
var MyApolloClient_1 = require("../MyApolloClient");
exports["default"] = (function (url) {
    var _a;
    var response = client_1.useSubscription(onCreateUserActionGql_1["default"], { variables: { url: "URL#" + url }, client: MyApolloClient_1["default"] });
    var createdUserAction = (_a = response.data) === null || _a === void 0 ? void 0 : _a.onCreateUserAction;
    return createdUserAction;
});
