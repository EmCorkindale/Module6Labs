
function Operator(props) {

    return (
        <>

            <select value={props.value} onChange={e => props.onChangeOperator(e.target.options[e.target.selectedIndex].value)}>
                <option value="plus">+</option>
                <option value="minus">-</option>
                <option value="divide">/</option>
                <option value="multiply">x</option>
            </select>

        </>

    )

}
export default Operator
