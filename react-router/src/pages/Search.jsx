import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();
  const url = "http://localhost:3000/products";
  const { data, loading, errors } = useFetch(url);

  const items = data?.filter((item) => item.name.toLowerCase().includes(query));

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {loading && <p>Carregando Produtos...</p>}
      {errors && <p>{errors}</p>}
      {items?.length === 0 && <p>Nenhum produto encontrado.</p>}
      <ul className="products">
        {items?.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
