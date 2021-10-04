#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
const fs = require('fs');
const readline = require('readline');
const ENVBASE_NAME = process.env.ENVBASE_NAME || '.env.base';
const ENV_NAME = process.env.ENV_NAME || '.env';
const LOG_COLOR_RESET = '\u001b[0m';
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const is_exists_envbase = fs.existsSync(ENVBASE_NAME);
        if (!is_exists_envbase) {
            errorLog(`${ENVBASE_NAME}ファイルが見つかりません。プロジェクトのrootディレクトリに${ENVBASE_NAME}ファイルを作成してください。`);
        }
        const is_exists_env = fs.existsSync(ENV_NAME);
        if (!is_exists_env) {
            copyEnvBase();
            successLog(`${ENV_NAME}ファイルの生成に成功したよ`);
        }
        else {
            const new_lines = yield genUpdatedEnvLines();
            writeEnvFile(new_lines);
            successLog(`${ENV_NAME}ファイルの更新に成功したよ`);
        }
    });
}
function copyEnvBase() {
    try {
        fs.copyFileSync(ENVBASE_NAME, ENV_NAME);
    }
    catch (error) {
        errorLog(`${ENVBASE_NAME}ファイルのコピーに失敗しました。`);
    }
}
function genUpdatedEnvLines() {
    var e_1, _a, e_2, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const ENV_FORMAT_REG = new RegExp(/([A-Z]|[a-z])+=\s*[A-Z]*/);
        const env_stream = fs.createReadStream(ENV_NAME);
        const env_lines = readline.createInterface({ input: env_stream });
        const env_line_objs = [];
        try {
            for (var env_lines_1 = __asyncValues(env_lines), env_lines_1_1; env_lines_1_1 = yield env_lines_1.next(), !env_lines_1_1.done;) {
                const env_line = env_lines_1_1.value;
                if (ENV_FORMAT_REG.test(env_line) === false) {
                    continue;
                }
                const env_line_space_escaped = env_line.replace(/\s/, '');
                const env_line_splited = env_line_space_escaped.split('=');
                const env_line_obj = { env_key: env_line_splited[0], env_val: env_line_splited[1] };
                env_line_objs.push(env_line_obj);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (env_lines_1_1 && !env_lines_1_1.done && (_a = env_lines_1.return)) yield _a.call(env_lines_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        const envbase_stream = fs.createReadStream(ENVBASE_NAME);
        const envbase_lines = readline.createInterface({ input: envbase_stream });
        const new_env_lines = [];
        try {
            for (var envbase_lines_1 = __asyncValues(envbase_lines), envbase_lines_1_1; envbase_lines_1_1 = yield envbase_lines_1.next(), !envbase_lines_1_1.done;) {
                const envbase_line = envbase_lines_1_1.value;
                if (ENV_FORMAT_REG.test(envbase_line) === false) {
                    continue;
                }
                const envbase_line_space_escaped = envbase_line.replace(/\s/, '');
                const envbase_line_splited = envbase_line_space_escaped.split('=');
                const [envbase_line_key] = envbase_line_splited;
                let isMatch = false;
                for (const [i, env_line_obj] of env_line_objs.entries()) {
                    if (envbase_line_key === env_line_obj.env_key) {
                        new_env_lines.push(envbase_line_key + '=' + env_line_obj.env_val);
                        env_line_objs.splice(i, 1);
                        isMatch = true;
                        break;
                    }
                }
                if (!isMatch) {
                    new_env_lines.push(envbase_line_key + '=');
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (envbase_lines_1_1 && !envbase_lines_1_1.done && (_b = envbase_lines_1.return)) yield _b.call(envbase_lines_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return new_env_lines;
    });
}
function writeEnvFile(env_lines) {
    try {
        const fd = fs.openSync(ENV_NAME, 'w');
        for (const [i, env_line] of env_lines.entries()) {
            fs.writeSync(fd, env_line);
            if (i !== env_lines.length - 1) {
                fs.writeSync(fd, '\n');
            }
        }
        fs.closeSync(fd);
    }
    catch (error) {
        errorLog(`${ENV_NAME}ファイルの書き込みに失敗しました。`);
    }
}
function successLog(message) {
    console.log('\u001b[32m' + message + LOG_COLOR_RESET);
}
function errorLog(message) {
    throw Error('\u001b[31m' + message + LOG_COLOR_RESET);
}
//# sourceMappingURL=index.js.map