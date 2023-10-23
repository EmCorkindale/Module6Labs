import BigCats from "./BigCats"

const BigCatsFilter = (props) => {
    return (
        <div className="FilterCats">
            <button onClick={props.onFilter}>Filter for Panthera</button>
            <button onClick={props.onReset}>Reset</button>
        </div>
    )
}
export default BigCatsFilter