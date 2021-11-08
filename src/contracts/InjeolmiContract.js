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
var Injeolmi_json_1 = require("./abi/injeolmi/artifacts/contracts/Injeolmi.sol/Injeolmi.json");
var KIP7Contract_1 = require("./standard/KIP7Contract");
var InjeolmiContract = /** @class */ (function (_super) {
    __extends(InjeolmiContract, _super);
    function InjeolmiContract() {
        return _super.call(this, "0x9CFc059F64D664F92f3d0329844B8ccca4E5215B", Injeolmi_json_1["default"].abi) || this;
    }
    return InjeolmiContract;
}(KIP7Contract_1["default"]));
exports["default"] = new InjeolmiContract();
