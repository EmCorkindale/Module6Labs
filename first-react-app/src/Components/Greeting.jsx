function Greeting(props) {

    return (
        <div className="Greeting componentBox">
            
            {props.name ? <h1>Hello {props.name} </h1> : <h1>Hello world!</h1>}
            {props.children}
        </div>
    )
}
//export this component
export default Greeting