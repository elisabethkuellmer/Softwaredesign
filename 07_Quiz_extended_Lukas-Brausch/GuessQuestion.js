"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Question_1 = require("./Question");
var GuessQuestion = /** @class */ (function (_super) {
    __extends(GuessQuestion, _super);
    function GuessQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuessQuestion.prototype.checkAnswer = function (insertedAnswer) {
        //
    };
    return GuessQuestion;
}(Question_1.Question));
exports.GuessQuestion = GuessQuestion;
