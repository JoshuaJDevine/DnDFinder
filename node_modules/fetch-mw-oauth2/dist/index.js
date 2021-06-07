"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Error = exports.OAuth2 = exports.fetchMwOAuth2 = exports.default = void 0;
var fetch_wrapper_1 = require("./fetch-wrapper");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(fetch_wrapper_1).default; } });
Object.defineProperty(exports, "fetchMwOAuth2", { enumerable: true, get: function () { return __importDefault(fetch_wrapper_1).default; } });
Object.defineProperty(exports, "OAuth2", { enumerable: true, get: function () { return __importDefault(fetch_wrapper_1).default; } });
var error_1 = require("./error");
Object.defineProperty(exports, "OAuth2Error", { enumerable: true, get: function () { return __importDefault(error_1).default; } });
//# sourceMappingURL=index.js.map