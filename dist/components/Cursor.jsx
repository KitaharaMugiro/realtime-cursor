"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursor = void 0;
var react_1 = __importDefault(require("react"));
var styles = require("./cursor.module.css");
var Cursor = function (props) {
    var userInfo = props.userInfo;
    return (<>
            <div className={styles.pointer} style={{ color: userInfo.color }}>
                ➤
            </div>
            <div className={styles.userinfo} style={{
            backgroundColor: userInfo.color,
            color: "white",
        }}>
                {userInfo.avatar}&nbsp;{userInfo.name}
            </div>
        </>);
};
exports.Cursor = Cursor;
