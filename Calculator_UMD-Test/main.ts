//import {Ops} from "./Operations";

class Program {

    static Main(): void {
        prompt("Welcome to the Calculator. Start entering calculations!");
        for (;;) {
            let command: string = prompt ("> ");
            if (command.toLowerCase() == "exit") {
                break;
            }
            let left: number = 0;
            let right: number = 0; 
            let opInx: number = Program.FindFirstNonDigit(command);
            if (opInx < 0) {
                prompt("No operator specified");
            }
            let opSymbol: string = command[opInx];
            try {
                left = parseInt(command.substring(0, opInx)); // konvertiert die erste Hälfte des Strings, bis zum Rechnenzeichen in eine Zahl
                right = parseInt(command.substring(opInx + 1)); // konvertiert die zweite Hälfte des String ab dem Rechnenzeichen in eine Zahl
            } catch {
                prompt("Error parsing command");
            }
            prompt("Calculating: " + left + opSymbol + right);


            let result: number;
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

    private static FindFirstNonDigit(_s: string): number { //evtl. nochmal umschreiben -> soll Rechenzeichen finden
        /*for (let i: number = 0; i < _s.length; i++) {
            if (typeof parseInt(_s[i]) != "number") {
                return i;
            }
        }*/
        let _sArray: string[] = _s.split("");
        for (let i: number = 0; i < _sArray.length; i++) {
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
