import { useEffect, useState } from "react"
import "./Products.css"
const Products = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => setProduct(data))
    }, [])

    return products.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt="img-product-card" />
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>
                <button>Comprar</button>
            </div>
        )
    })

}

export default Products