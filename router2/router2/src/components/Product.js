import { useParams } from "react-router-dom";

function Product() {
    let { categoryId } = useParams();
    return (
        <div>
            <h3>Id selectd {categoryId}</h3>
        </div>
    );
}
export default Product;