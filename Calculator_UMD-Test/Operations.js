(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ops = void 0;
    class Ops {
        static Power(_a, _exp) {
            let result = 1;
            for (let i = 0; i < _exp; i++) {
                result *= _a;
            }
            return result;
        }
        static GreatesCommonDenominator(_a, _b) {
            if (_a < _b) {
                let tmp = _a;
                _a = _b;
                _b = tmp;
            }
            while (_b > 0) {
                let c = _a % _b;
                _a = _b;
                _b = c;
            }
            return _a;
        }
    }
    exports.Ops = Ops;
});
//# sourceMappingURL=Operations.js.map