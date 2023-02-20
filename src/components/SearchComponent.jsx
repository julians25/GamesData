import styles from "./Search.module.css";
import { FcSearch } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseQuery } from "../hooks/UseQuery";

export const SearchComponent = () => {
  const search = UseQuery();
  const searchParam = search.get("search");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
   
  useEffect(()=>{
   setInputValue(searchParam || "")
  },[searchParam])
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + inputValue);
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.crate}>
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          <FcSearch size={15} />
        </button>
      </div>
    </form>
  );
};
