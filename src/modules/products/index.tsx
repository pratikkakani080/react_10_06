import axios from "axios";
import { useEffect, useState } from "react";

// CRUD
// C - POST
// R - GET
// U - PUT / PATCH
// D - DELETE

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // axios.get("https://dummyjson.com/products?skip=30&limit=60").then((res) => {
    //   console.log(res);
    //   setProducts(res.data.products);
    // });
    setLoading(true);
    fetch("https://dummyjson.com/products?skip=30&limit=60")
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading
        ? "loading..."
        : products.map((el, i) => (
            <div key={i}>
              <h4>{el.title}</h4>
            </div>
          ))}
    </div>
  );
}
