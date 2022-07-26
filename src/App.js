import axios from "axios";
import { useEffect, useState } from "react";

const App = props => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
    // axios.get('https://dummyjson.com/products').then((res) => console.log(res.data.products[0]))
    // axios.get('https://dummyjson.com/products').then((res) => setProducts(res.data.products))
  }, [])

  async function getProducts() {
    const res = await axios.get('https://dummyjson.com/products');
    console.log(res)
    setProducts(res.data.products)
  }

  return (
    <div>
      {products.map((product) => <h1 key={product.id}> {product.id} {product.title}</h1>)}
    </div>
  )
}

export default App;