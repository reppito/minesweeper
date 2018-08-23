"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//verify if all strings elements in an string array are valid numbers
function verifyNaN(param) {
    for (let i = 0; i < param.length; i++) {
        if (isNaN(parseInt(param[i]))) {
            return true;
        }
    }
    return false;
}
exports.verifyNaN = verifyNaN;
//verify if numbers in a string array are less than the minimun required
function MinimunSize(param, minimun) {
    for (let i = 0; i < param.length; i++) {
        if (parseInt(param[i]) < minimun) {
            return true;
        }
    }
    return false;
}
exports.MinimunSize = MinimunSize;
//verify if numbers in a string array are less than the minimun required
function MaximunSize(param, maximun) {
    for (let i = 0; i < param.length; i++) {
        if (parseInt(param[i]) > maximun) {
            return true;
        }
    }
    return false;
}
exports.MaximunSize = MaximunSize;
//# sourceMappingURL=utils.js.map