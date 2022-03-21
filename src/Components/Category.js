
const Category = ({imgUrl, name}) => {
    return (
        <div className="category">
            <img src={imgUrl} alt="category"></img>
            <div>{name}</div>
        </div>
    );
}

export default Category;