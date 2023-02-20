import styles from "./GameDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadComponent } from "../components/LoadComponent";

export function Details() {
  const { elementID } = useParams();
  const [loading, setLoading] = useState(true);
  const [element, setelement] = useState(null);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementID]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadData() {
    //setLoading(true)
    const url =
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" +
      elementID;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4f7cb24732msh5f485107cc994cdp1727e1jsne30f351ccdc5",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    setLoading(false);
    setelement(data);
  }

  if (loading) {
    return <LoadComponent />;
  }
  if (!element) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <img
          className={`${styles.col} ${styles.gameImage}`}
          src={element.thumbnail}
          alt=""
          width={730}
          height={412}
        />
        <div className={`${styles.col} ${styles.movieDetails}`}>
          <p className={styles.first}>
            <strong>Title: </strong>
            {element.title}
          </p>
          <p>
            <strong>Genre: </strong>
            {element.genre}
          </p>
          <p>
            <strong>Platform: </strong>
            {element.platform}
          </p>
          <p>
            <strong>Publisher: </strong>
            {element.publisher}
          </p>
          <p>
            <strong>Release Date: </strong>
            {element.release_date}
          </p>
        </div>
      </div>
       <div className={`${styles.description} ${styles.movieDetails}`}>
       <p>
            <strong>Description: </strong>
            {element.description}
          </p>
          
       </div>
    </div>
  );
}
