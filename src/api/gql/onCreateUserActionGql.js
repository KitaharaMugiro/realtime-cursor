"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var client_1 = require("@apollo/client");
exports["default"] = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        subscription MySubscription($url: String!) {\n            onCreateUserAction(PK: $url) {\n                PK\n                SK\n                actionId\n                value\n                name\n                avator\n                color\n                updatedAt\n                deleteTime\n            }\n        }\n        "], ["\n        subscription MySubscription($url: String!) {\n            onCreateUserAction(PK: $url) {\n                PK\n                SK\n                actionId\n                value\n                name\n                avator\n                color\n                updatedAt\n                deleteTime\n            }\n        }\n        "])));
var templateObject_1;
