import { useState } from "react";
import NumberInputs from "./NumberInputs";
import ResultsDisplay from "./ResultsDisplay";

function Calculcator(props) {
    const [operator, setOperator] = useState("plus");
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    return (
        <div className="Calculator">
            <NumberInputs operator={operator} number1={number1} number2={number2} onNumber1Change={x => setNumber1(x)} onNumber2Change={y => setNumber2(y)} onChangeOperator={x => setOperator(x)} />
            <ResultsDisplay result={calcResult(number1, number2, operator)}/>
            <div>
                {operator}
            </div>
        </div>
    )
}
function calcResult (number1, number2, operator){
    switch (operator) {
        case "plus":
            return number1 + number2;
        case "minus":
            return number1 - number2;
        case "divide":
            return number1 / number2;
        case "multiply":
            return number1 * number2
        default:
            return <p>Please enter a number</p>;
    }
}
export default Calculcator