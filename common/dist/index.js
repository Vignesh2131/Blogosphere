"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInput = exports.signupInput = exports.blogUpdateInput = exports.blogInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.blogInput = zod_1.default.object({
    title: zod_1.default.string().min(10),
    content: zod_1.default.string().min(50)
});
exports.blogUpdateInput = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string().min(10),
    content: zod_1.default.string().min(50)
});
exports.signupInput = zod_1.default.object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
