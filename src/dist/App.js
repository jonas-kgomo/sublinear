"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Tasks_1 = require("./Tasks");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("h1", null, "Sublinear"),
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(Tasks_1["default"], null),
            react_1["default"].createElement("p", null, "Sync linear tasks with notion"),
            react_1["default"].createElement("img", { className: "App-logo", src: "https://raw.githubusercontent.com/jonas-kgomo/sublinear/main/assets/logo.png" }))));
}
exports["default"] = App;
