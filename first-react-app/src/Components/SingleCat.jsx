const SingleCat = ({name, latinName, image, onDelete, id}) => {
 return (
    <>
    <h1>{name}</h1>
    <h2>{latinName}</h2>
    <img src={image} alt="Big cat picture"></img>
    <button onClick={()=>{onDelete(id)}}>Delete</button>
    </>
 )   
}
export default SingleCat