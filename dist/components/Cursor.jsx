"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
var react_1 = __importDefault(require("react"));
var Cursor = function (props) {
    var userInfo = props.userInfo;
    return (<>
            <div className="realtimely_pointer" style={{
            display: "inline-block",
            transform: "rotate(-127deg)",
            fontSize: "16px",
            color: userInfo.color
        }}>
                ➤
            </div>
            <div className="realtimely_userinfo" style={{
            display: "block",
            margin: "4px 16px",
            padding: "5px",
            whiteSpace: "nowrap",
            backgroundColor: userInfo.color,
            color: "white",
        }}>
                {userInfo.avatar}&nbsp;{userInfo.name}
            </div>
        </>);
};
exports.Cursor = Cursor;
