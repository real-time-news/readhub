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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchNews_1 = __importDefault(require("./fetchNews"));
const write_1 = __importDefault(require("./write"));
const submit_1 = __importDefault(require("./submit"));
const parse_1 = __importDefault(require("./parse"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, fetchNews_1.default)();
        const parseData = (0, parse_1.default)(data);
        yield (0, write_1.default)([...yield parseData]);
        (0, submit_1.default)();
    });
}
start();
