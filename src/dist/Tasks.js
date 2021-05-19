"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var sdk_1 = require("@linear/sdk");
//import { Client } from "@notionhq/client";
// const linearClient = new LinearClient({ apiKey: process.env.LINEAR_KEY });
//const notion = new Client({ auth: process.env.NOTION_KEY });
var linear = new sdk_1.LinearClient({ apiKey: process.env.REACT_APP_LINEAR_KEY });
function Tasks() {
    var _a = react_1.useState(""), user = _a[0], setUser = _a[1];
    react_1.useEffect(function () {
        function getUser() {
            return __awaiter(this, void 0, void 0, function () {
                var me;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, linear.viewer];
                        case 1:
                            me = _a.sent();
                            setUser("  | " + (me === null || me === void 0 ? void 0 : me.name) + " @" + (me === null || me === void 0 ? void 0 : me.displayName)); // @profile display
                            return [2 /*return*/];
                    }
                });
            });
        }
        getUser();
    }, []);
    var _b = react_1.useState(""), tasks = _b[0], setTasks = _b[1];
    react_1.useEffect(function () {
        function getTasks() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var tasks;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, linear.issues()];
                        case 1:
                            tasks = _c.sent();
                            //setTasks(" :" + tasks?.nodes?.[0].title);
                            if ((_a = tasks === null || tasks === void 0 ? void 0 : tasks.nodes) === null || _a === void 0 ? void 0 : _a.length) {
                                (_b = tasks === null || tasks === void 0 ? void 0 : tasks.nodes) === null || _b === void 0 ? void 0 : _b.map(function (e, i) { var _a; 
                                //        console.log(`${me.displayName} has issue: ${issue.title}`)
                                return setTasks(" |" + ((_a = tasks === null || tasks === void 0 ? void 0 : tasks.nodes) === null || _a === void 0 ? void 0 : _a[i].title)); }
                                //  setTasks(tasks?.nodes?.map())
                                // console.log(e)
                                // console.log(" " + tasks?.nodes?.[i].title)
                                // e.url
                                );
                            }
                            else {
                                console.log(" has no issues");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        getTasks();
    }, []);
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("div", { className: "user" },
            react_1["default"].createElement("p", { className: "h" }, "User"),
            react_1["default"].createElement("p", null, user)),
        react_1["default"].createElement("p", null,
            "Tasks: ",
            tasks,
            " "),
        react_1["default"].createElement("div", null)));
}
exports["default"] = Tasks;
