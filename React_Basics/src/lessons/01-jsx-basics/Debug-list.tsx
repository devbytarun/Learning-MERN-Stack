type Product = {
  id: number
  name: string
  price: number
}

const products: Product[] = [
  { id: 1, name: "Phone", price: 999 },
  { id: 2, name: "Laptop", price: 1499 },
]

function ProductList() {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  )
}


export default ProductList