import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import instance from "../../lib/api";

// CRUD
// C - POST
// R - GET
// U - PUT / PATCH
// D - DELETE

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      let res = await instance.get("/todos");
      console.log(res);

      setProducts(res);
      setLoading(false);
    };

    try {
      getProducts();
    } catch (err) {
      toast.error("error fetching data");
    } finally {
      setLoading(false);
    }
    // setLoading(true);
    // fetch("https://dummyjson.com/products?skip=30&limit=60", {
    //   method: 'GET', // POST | PUT | PATCH | DELETE,
    //   // body: JSON.stringify('payload')
    // })
    //   .then((res) => res.json())
    //   .then((res) => setProducts(res.products))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));
  }, []);

  const handleCreateProduct = async () => {
    let res = await instance.post("/todos", {
      title: "test product",
    });
    if (res.status === 200) {
      toast.success("data has been created successfully");
    }
  };

  const handleUpdateProduct = () => {
    instance.put("/todos/3", {
      title: "test product updated",
    });
  };

  const handleDeleteProduct = () => {
    instance.delete("/todos/3");
  };

  return (
    <div>
      <button onClick={handleCreateProduct}>Create product</button>
      <button onClick={handleUpdateProduct}>Update product</button>
      <button onClick={handleDeleteProduct}>Delete product</button>
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
