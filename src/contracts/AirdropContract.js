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
exports.__esModule = true;
var Airdrop_json_1 = require("./abi/injeolmi/artifacts/contracts/Airdrop.sol/Airdrop.json");
var Contract_1 = require("./Contract");
var AirdropContract = /** @class */ (function (_super) {
    __extends(AirdropContract, _super);
    function AirdropContract() {
        return _super.call(this, "0x1dA9E7adfB6817D42b1c9a5321992B1EF97701Ab", Airdrop_json_1["default"].abi) || this;
    }
    return AirdropContract;
}(Contract_1["default"]));
exports["default"] = new AirdropContract();
