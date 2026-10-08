import { Link, Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname.endsWith("/details");
  return (
    <div>
      {!isDetailsPage && <Link to="details">Ver detalhes</Link>}

      {/* Observa a barra no final da tag: <Outlet /> */}
      <Outlet />
    </div>
  );
};

export default Products;
