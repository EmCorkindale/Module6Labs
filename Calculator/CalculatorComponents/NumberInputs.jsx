import Operator
    from "./Operator";
const NumberInputs = (props) => {
    return (
        <div className="NumberInputs">
            <form>
                <label>
                    Number 1:
                    <input type="number" name="number1" value={props.number1} onChange={e => props.onNumber1Change(parseFloat(e.target.value))} />
                </label>
                <label>
                    <Operator operator={props.operator} onChangeOperator={props.onChangeOperator}/>
                </label>
                <label>
                    Number 2:
                    <input type="number" name="number2" value={props.number2} onChange={e => props.onNumber2Change(parseFloat(e.target.value))} />
                </label>
            </form>
        </div>
    )
}


export default NumberInputs