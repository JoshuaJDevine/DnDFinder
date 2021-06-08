"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
/**
 * Encoding a string to base64 in node.js
 */
function encode(input) {
    return new Buffer(input).toString('base64');
}
exports.encode = encode;
//# sourceMappingURL=base64.js.map