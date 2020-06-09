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
var MultipleChoiceQuestion = /** @class */ (function (_super) {
    __extends(MultipleChoiceQuestion, _super);
    function MultipleChoiceQuestion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleChoiceQuestion.prototype.showAnswers = function () {
        //
    };
    MultipleChoiceQuestion.prototype.checkAnswers = function (selectedAnswer) {
        //
    };
    return MultipleChoiceQuestion;
}(Question_1.Question));
exports.MultipleChoiceQuestion = MultipleChoiceQuestion;
