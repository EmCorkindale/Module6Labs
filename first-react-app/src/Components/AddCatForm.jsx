import BigCats from "./BigCats"
import { useState } from "react"

const AddCatForm = ({onAddCatForm}) => {

    function handleSubmit(e) {
        e.preventDefault();
        //create key-value pair object with form input names
        const data = new FormData(e.target);
        console.log(typeof onAddCatForm);
        console.log(Object.fromEntries(data));
        onAddCatForm(Object.fromEntries(data));
    }


    return (
        <div className="CatForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input type="text" name="name" />
                    <br></br>
                </label>
                <label>
                    Latin Name:
                    <input type="text" name="latinName" />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="imgUrl"/>
                </label>
                <button>Add cat</button>
            </form>
        </div>
    )
}
export default AddCatForm