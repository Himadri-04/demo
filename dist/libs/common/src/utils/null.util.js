"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNull = exports.isNull = void 0;
const lodash_1 = require("lodash");
function isNull(obj) {
    return lodash_1.default.isNull(obj) || lodash_1.default.isUndefined(obj);
}
exports.isNull = isNull;
function isNotNull(obj) {
    return !lodash_1.default.isNull(obj) && !lodash_1.default.isUndefined(obj);
}
exports.isNotNull = isNotNull;
//# sourceMappingURL=null.util.js.map