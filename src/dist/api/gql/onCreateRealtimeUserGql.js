"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
exports.default = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        subscription MySubscription($url: String!) {\n            onCreateRealtimeUser(PK: $url) {\n                PK\n                SK\n                avator\n                color\n                name\n                updatedAt\n                deleteTime\n            }\n        }\n        "], ["\n        subscription MySubscription($url: String!) {\n            onCreateRealtimeUser(PK: $url) {\n                PK\n                SK\n                avator\n                color\n                name\n                updatedAt\n                deleteTime\n            }\n        }\n        "])));
var templateObject_1;
//# sourceMappingURL=onCreateRealtimeUserGql.js.map