"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorAnimate = void 0;
var react_1 = __importDefault(require("react"));
var Cursor_1 = require("./Cursor");
var styles = require("./cursor.module.css");
var CursorAnimate = function (props) {
    var curPos = props.curPos;
    var userInfo = props.userInfo;
    var view = function () {
        if (props.customView) {
            return props.customView({ userInfo: userInfo });
        }
        else {
            return <Cursor_1.Cursor userInfo={userInfo}/>;
        }
    };
    return (<div className={styles.cursor} style={{
            left: 0,
            top: 0,
            transform: "translateX(" + curPos.x + "px) translateY(" + curPos.y + "px)",
            transition: "transform 1s"
        }}>
            {view()}
        </div>);
};
exports.CursorAnimate = CursorAnimate;
