"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.__esModule = true;
var bignumber_1 = require("@ethersproject/bignumber");
var eventcontainer_1 = require("eventcontainer");
var ExtWallet = /** @class */ (function (_super) {
    __extends(ExtWallet, _super);
    function ExtWallet() {
        var _this = _super.call(this) || this;
        _this.klaytn = window.klaytn;
        _this.caver = window.caver;
        _this.checkConnected();
        return _this;
    }
    Object.defineProperty(ExtWallet.prototype, "installed", {
        get: function () {
            return this.klaytn !== undefined && this.caver !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    ExtWallet.prototype.checkConnected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connected()];
                    case 1:
                        if ((_a.sent()) === true) {
                            this.fireEvent("connect");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ExtWallet.prototype.loadAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.caver === undefined)) return [3 /*break*/, 1];
                        _a = undefined;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.caver.klay.getAccounts()];
                    case 2:
                        _a = (_b.sent())[0];
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    ExtWallet.prototype.loadChainId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.caver === undefined)) return [3 /*break*/, 1];
                        _a = -1;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.caver.klay.getChainId()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    ExtWallet.prototype.loadBlockNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.caver === undefined)) return [3 /*break*/, 1];
                        _a = -1;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.caver.klay.getBlockNumber()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    ExtWallet.prototype.balanceOf = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.caver === undefined)) return [3 /*break*/, 1];
                        _a = undefined;
                        return [3 /*break*/, 3];
                    case 1:
                        _c = (_b = bignumber_1.BigNumber).from;
                        return [4 /*yield*/, this.caver.klay.getBalance(address)];
                    case 2:
                        _a = _c.apply(_b, [_d.sent()]);
                        _d.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    ExtWallet.prototype.loadBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadAddress()];
                    case 1:
                        address = _b.sent();
                        if (!(address === undefined)) return [3 /*break*/, 2];
                        _a = bignumber_1.BigNumber.from(0);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.balanceOf(address)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                }
            });
        });
    };
    ExtWallet.prototype.connected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadAddress()];
                    case 1: return [2 /*return*/, (_a.sent()) !== undefined];
                }
            });
        });
    };
    ExtWallet.prototype.connect = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.klaytn) === null || _a === void 0 ? void 0 : _a.enable())];
                    case 1:
                        _b.sent();
                        this.checkConnected();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExtWallet.prototype.createContract = function (address, abi) {
        return this.caver === undefined ? undefined : new this.caver.klay.Contract(abi, address);
    };
    ExtWallet.prototype.addToken = function (address, symbol, decimals, image) {
        var _a;
        (_a = this.klaytn) === null || _a === void 0 ? void 0 : _a.sendAsync({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: { address: address, symbol: symbol, decimals: decimals, image: image }
            },
            id: Math.round(Math.random() * 100000)
        });
    };
    return ExtWallet;
}(eventcontainer_1["default"]));
exports["default"] = new ExtWallet();
