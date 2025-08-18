import {useState, useEffect} from "react"

const Products = () => {
    const [products, setProducts] = useState ([])

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    },[])
    
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.img} alt="" />
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    <button>Comprar</button>
                </div>
            ))}
        </div>
    )
}

export default Products