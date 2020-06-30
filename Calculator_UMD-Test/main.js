"use strict";
//import {Ops} from "./Operations";
class Program {
    static Main() {
        prompt("Welcome to the Calculator. Start entering calculations!");
        for (;;) {
            let command = prompt("> ");
            if (command.toLowerCase() == "exit") {
                break;
            }
            let left = 0;
            let right = 0;
            let opInx = Program.FindFirstNonDigit(command);
            if (opInx < 0) {
                prompt("No operator specified");
            }
            let opSymbol = command[opInx];
            try {
                left = parseInt(command.substring(0, opInx)); // konvertiert die erste Hälfte des Strings, bis zum Rechnenzeichen in eine Zahl
                right = parseInt(command.substring(opInx + 1)); // konvertiert die zweite Hälfte des String ab dem Rechnenzeichen in eine Zahl
            }
            catch (_a) {
                prompt("Error parsing command");
            }
            prompt("Calculating: " + left + opSymbol + right);
            let result;
            switch (opSymbol) {
                case "+":
                    result = left + right;
                    break;
                case "-":
                    result = left - right;
                    break;
                case "*":
                    result = left * right;
                    break;
                case "/":
                    result = left / right;
                    break;
                /*case "^":
                    result = Ops.Power(left, right);
                    break;
                case "#":
                    result = Ops.GreatesCommonDenominator(left, right);
                    break;
                    */
            }
            prompt("...=" + result);
        }
    }
    static FindFirstNonDigit(_s) {
        /*for (let i: number = 0; i < _s.length; i++) {
            if (typeof parseInt(_s[i]) != "number") {
                return i;
            }
        }*/
        let _sArray = _s.split("");
        for (let i = 0; i < _sArray.length; i++) {
            switch (_sArray[i]) {
                case "+":
                    return i;
                    break;
                case "-":
                    return i;
                    break;
                case "*":
                    return i;
                    break;
                case "/":
                    return i;
                    break;
            }
        }
        return -1;
    }
}
Program.Main();
//# sourceMappingURL=main.js.map