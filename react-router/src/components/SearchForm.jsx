import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
//Style module
import style from "../styles/styleComponents/SearchForm.module.css";
const SearchForm = () => {
  // const [inputState, setInputState] = useState();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  // const location = useLocation();
  // const isFormComponent = location.pathname.endsWith("/");
  const ref = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    } else {
      await navigate("/search?q=" + encodeURIComponent(query));
    }
  };
  useEffect(() => {
    ref.current.focus();
    // setInputState("");
  }, []);
  return (
    <div>
      {/* {isFormComponent && ( */}
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={ref}
        />
        <input type="submit" value="Buscar" />
      </form>
      {/* )} */}
    </div>
  );
};

export default SearchForm;
