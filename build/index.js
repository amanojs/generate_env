#!/usr/bin/env node
"use strict";
/** 2021/10/03 takashi */
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
var ENVBASE_NAME = process.env.ENVBASE_NAME || '.env.base';
var ENV_NAME = process.env.ENV_NAME || '.env';
var LOG_COLOR_RESET = '\u001b[0m';
genEnvFile();
function genEnvFile() {
    return __awaiter(this, void 0, void 0, function () {
        var is_exists_envbase, is_exists_env, new_lines;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    is_exists_envbase = fs.existsSync(ENVBASE_NAME);
                    if (!is_exists_envbase) {
                        errorLog(ENVBASE_NAME + "\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306Eroot\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B" + ENVBASE_NAME + "\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
                    }
                    is_exists_env = fs.existsSync(ENV_NAME);
                    if (!!is_exists_env) return [3 /*break*/, 1];
                    // .envファイルがまだ存在していない場合
                    copyEnvBase();
                    successLog(ENV_NAME + "\u30D5\u30A1\u30A4\u30EB\u306E\u751F\u6210\u306B\u6210\u529F\u3057\u305F\u3088");
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, genUpdatedEnvLines()];
                case 2:
                    new_lines = _a.sent();
                    writeEnvFile(new_lines);
                    successLog(ENV_NAME + "\u30D5\u30A1\u30A4\u30EB\u306E\u66F4\u65B0\u306B\u6210\u529F\u3057\u305F\u3088");
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
/** .env.baseファイルを.envファイルの名前でコピーする関数。 */
function copyEnvBase() {
    try {
        fs.copyFileSync(ENVBASE_NAME, ENV_NAME);
    }
    catch (error) {
        errorLog(ENVBASE_NAME + "\u30D5\u30A1\u30A4\u30EB\u306E\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");
    }
}
/**
 * @returns string[]
 * 新しい.envファイルに書き込む文字列を行ごとの配列にして返す関数。
 */
function genUpdatedEnvLines() {
    var e_1, _a, e_2, _b;
    return __awaiter(this, void 0, void 0, function () {
        var env_stream, env_lines, ENV_FORMAT_REG, env_line_objs, env_lines_1, env_lines_1_1, env_line, env_line_space_escaped, env_line_splited, env_line_obj, e_1_1, envbase_stream, envbase_lines, new_env_lines, envbase_lines_1, envbase_lines_1_1, envbase_line, envbase_line_space_escaped, envbase_line_splited, _c, envbase_line_key, isMatch, _d, _e, _f, i, env_line_obj, e_2_1;
        var e_3, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    env_stream = fs.createReadStream(ENV_NAME);
                    env_lines = readline.createInterface({ input: env_stream });
                    ENV_FORMAT_REG = new RegExp(/([A-Z]|[a-z])+=\s*[A-Z]*/);
                    env_line_objs = [];
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 6, 7, 12]);
                    env_lines_1 = __asyncValues(env_lines);
                    _h.label = 2;
                case 2: return [4 /*yield*/, env_lines_1.next()];
                case 3:
                    if (!(env_lines_1_1 = _h.sent(), !env_lines_1_1.done)) return [3 /*break*/, 5];
                    env_line = env_lines_1_1.value;
                    if (ENV_FORMAT_REG.test(env_line) === false) {
                        return [3 /*break*/, 4];
                    }
                    env_line_space_escaped = env_line.replace(/\s/, '');
                    env_line_splited = env_line_space_escaped.split('=');
                    env_line_obj = { env_key: env_line_splited[0], env_val: env_line_splited[1] };
                    env_line_objs.push(env_line_obj);
                    _h.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _h.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _h.trys.push([7, , 10, 11]);
                    if (!(env_lines_1_1 && !env_lines_1_1.done && (_a = env_lines_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(env_lines_1)];
                case 8:
                    _h.sent();
                    _h.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    envbase_stream = fs.createReadStream(ENVBASE_NAME);
                    envbase_lines = readline.createInterface({ input: envbase_stream });
                    new_env_lines = [];
                    _h.label = 13;
                case 13:
                    _h.trys.push([13, 18, 19, 24]);
                    envbase_lines_1 = __asyncValues(envbase_lines);
                    _h.label = 14;
                case 14: return [4 /*yield*/, envbase_lines_1.next()];
                case 15:
                    if (!(envbase_lines_1_1 = _h.sent(), !envbase_lines_1_1.done)) return [3 /*break*/, 17];
                    envbase_line = envbase_lines_1_1.value;
                    if (ENV_FORMAT_REG.test(envbase_line) === false) {
                        return [3 /*break*/, 16];
                    }
                    envbase_line_space_escaped = envbase_line.replace(/\s/, '');
                    envbase_line_splited = envbase_line_space_escaped.split('=');
                    _c = __read(envbase_line_splited, 1), envbase_line_key = _c[0];
                    isMatch = false;
                    try {
                        for (_d = (e_3 = void 0, __values(env_line_objs.entries())), _e = _d.next(); !_e.done; _e = _d.next()) {
                            _f = __read(_e.value, 2), i = _f[0], env_line_obj = _f[1];
                            if (envbase_line_key === env_line_obj.env_key) {
                                new_env_lines.push(envbase_line_key + '=' + env_line_obj.env_val);
                                env_line_objs.splice(i, 1);
                                isMatch = true;
                                break;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    if (!isMatch) {
                        new_env_lines.push(envbase_line_key + '=');
                    }
                    _h.label = 16;
                case 16: return [3 /*break*/, 14];
                case 17: return [3 /*break*/, 24];
                case 18:
                    e_2_1 = _h.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 24];
                case 19:
                    _h.trys.push([19, , 22, 23]);
                    if (!(envbase_lines_1_1 && !envbase_lines_1_1.done && (_b = envbase_lines_1.return))) return [3 /*break*/, 21];
                    return [4 /*yield*/, _b.call(envbase_lines_1)];
                case 20:
                    _h.sent();
                    _h.label = 21;
                case 21: return [3 /*break*/, 23];
                case 22:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 23: return [7 /*endfinally*/];
                case 24: return [2 /*return*/, new_env_lines];
            }
        });
    });
}
/**
 * 文字列を行ごとに区切ってある配列をもらい、ファイルに書き込む。
 */
function writeEnvFile(env_lines) {
    var e_4, _a;
    try {
        var fd = fs.openSync(ENV_NAME, 'w');
        try {
            for (var _b = __values(env_lines.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], env_line = _d[1];
                fs.writeSync(fd, env_line);
                if (i !== env_lines.length - 1) {
                    fs.writeSync(fd, '\n');
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        fs.closeSync(fd);
    }
    catch (error) {
        errorLog(ENV_NAME + "\u30D5\u30A1\u30A4\u30EB\u306E\u66F8\u304D\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");
    }
}
function successLog(message) {
    console.log('\u001b[32m' + message + LOG_COLOR_RESET);
}
function errorLog(message) {
    throw Error('\u001b[31m' + message + LOG_COLOR_RESET);
}
//# sourceMappingURL=index.js.map