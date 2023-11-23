"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.md5 = void 0;
const node_crypto_1 = require("node:crypto");
function md5(content) {
    return (0, node_crypto_1.createHash)('md5').update(content).digest('hex');
}
exports.md5 = md5;
//# sourceMappingURL=hash.util.js.map