import { useState } from "react";
import SingleCat from "./SingleCat";
import BigCatsReverse from "./BigCatsReverse";
import BigCatsFilter from "./BigCatsFilter";
import AddCatForm from "./AddCatForm";

let cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
];

function BigCats(props) {
    const [currentCats, setCurrentCats] = useState([...cats])
    function handleReverse() {
        let newCats = [...currentCats];
        newCats.reverse();
        setCurrentCats(newCats);
    }

    function handleFilter() {

        const filterCats = cats.filter(cat => cat.latinName.includes('Panthera'))
        setCurrentCats(filterCats)
    };

    function handleReset() {
        setCurrentCats(cats)
    }
    function handleAddCats(newCat) {
        newCat.id = currentCats.length + 1;
        cats.push(newCat)
        setCurrentCats([...cats])

    }

    function handleDelete(catId) {
        cats = cats.filter((cat) => {
            return cat.id != catId;
        })
        setCurrentCats([...cats])
    }

    return (
        <div className="BigCats componentBox">
            <BigCatsReverse onReverse={handleReverse}></BigCatsReverse>
            <BigCatsFilter onFilter={handleFilter} onReset={handleReset}></BigCatsFilter>
            <AddCatForm onAddCatForm={handleAddCats}>Add a cat here:</AddCatForm>
            <ul>
                {currentCats.map(cat => (
                    <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image} onDelete={handleDelete} id={cat.id}>

                    </SingleCat>
                ))}
            </ul>
        </div>
    )
}

export default BigCats