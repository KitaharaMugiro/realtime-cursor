"use strict";
exports.__esModule = true;
var client_1 = require("@apollo/client");
var createUserActionGql_1 = require("../gql/createUserActionGql");
var MyApolloClient_1 = require("../MyApolloClient");
exports["default"] = (function () {
    var createUserAction = client_1.useMutation(createUserActionGql_1["default"], { client: MyApolloClient_1["default"] })[0];
    return function (url, userId, actionId, value, name, avator, color) {
        var actionIdAndUserId = "ActionId#" + actionId + "UserId#" + userId;
        createUserAction({
            variables: {
                url: "URL#" + url,
                actionIdAndUserId: actionIdAndUserId,
                actionId: actionId,
                value: value,
                name: name,
                avator: avator,
                color: color
            }
        });
    };
});
