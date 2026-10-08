import { useFetch } from "../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/products/${id}`;
  const { data: products, errors, loading } = useFetch(url);
  return (
    <>
      {errors && <p>{errors}</p>}
      {loading && <p>Carregando detalhes do produto...</p>}
      {!loading && <p>ID do produto: {id}</p>}
      {!loading && <p> Detalhes do produto: {products?.details}</p>}
    </>
  );
};

export default ProductDetails;
