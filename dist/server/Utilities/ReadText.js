"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class ReadText {
    constructor() {
        this.entrytext = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    Question(question) {
        return __awaiter(this, void 0, void 0, function* () {
            let text;
            this.entrytext.question(question, (answer) => {
                text = answer;
                return text;
            });
        });
    }
}
exports.ReadText = ReadText;
//# sourceMappingURL=ReadText.js.map