"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//verify if all strings elements in an string array are valid numbers
function verifyNaN(param) {
    param.forEach((number) => {
        if (isNaN(parseInt(number)))
            return true;
    });
    return false;
}
exports.verifyNaN = verifyNaN;
//# sourceMappingURL=utils.js.map