import React, { useState, useEffect } from 'react';
import './styles.css';

const LoadMore = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);

    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );

            const result = await response.json();
            setLoading(false);
            if (result && result.products && result.products.length > 0) {
                if (count === 0) {
                    setProducts(result.products);
                } else {
                    setProducts((prevProducts) => [
                        ...prevProducts,
                        ...result.products,
                    ]);
                }
            }
            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);


    return (
        <div className="container">
            <h1>Load More</h1>
            {loading && <p>Loading...</p>}
            {products && products.length > 0 ? (
                <div className="product-container">
                    {products.map((product) => (
                        <div key={product.id} className="product">
                            <img src={product.thumbnail} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products available</p>
            )}
            {!loading && count < 5 && (
                <button onClick={() => setCount(count + 1)}>Load More</button>
            )}
            {!loading && count >= 5 && (
                <div>No more items to load.</div>
            )}
        </div>
    );
};

export default LoadMore;