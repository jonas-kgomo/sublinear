"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Tasks_1 = require("./Tasks");
var Project_1 = require("./Project");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("h1", null,
            "Sublinear ",
            react_1["default"].createElement("img", { alt: "logo", src: "/logo.png", className: "Logo" })),
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("button", { className: "btn" }, "Linear | Notion"),
            react_1["default"].createElement("p", { className: "Sync" }, "Sync linear tasks with notion"),
            react_1["default"].createElement(Tasks_1["default"], null),
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("img", { alt: "project", className: "App-logo", src: "https://raw.githubusercontent.com/jonas-kgomo/sublinear/main/assets/logo.png" }),
                react_1["default"].createElement("div", { className: "centered" },
                    react_1["default"].createElement(Project_1["default"], null))))));
}
exports["default"] = App;
