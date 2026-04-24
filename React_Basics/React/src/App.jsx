import Profile from "./Components/profile";
import Card from "./Components/Card";

function App() {
  const productName = "Lg Tv";
  const price = 25000;
  const inStock = true;

  return (
 <div>
  <h1>{productName}</h1>
  <p>{price}</p>
  <p>{inStock ? "Available" : "Out of Stock"}</p>
 </div>
  )
}

export default App;
