import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";
//Estilos
import styles from "../styles/Home.module.css";
const Home = () => {
  //Carregando
  const url = "http://localhost:3000/products";
  const { data: items, loading, errors } = useFetch(url);
  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      {loading && <p>Carregando Produtos...</p>}
      {errors && <p>{errors}</p>}
      <ul className={styles.products}>
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

export default Home;
