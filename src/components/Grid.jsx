import { useEffect,useState } from "react";
import { Card } from "./Card";
import { LoadComponent } from "../components/LoadComponent";
import styles from "./Grid.module.css";
import { UseQuery } from "../hooks/UseQuery";

export function Grid({category}) {
  
    const [elements, setelement] = useState([]);
    const [loading, setLoading] = useState(true);

    const search = UseQuery();
    const searchParam = search.get("search")
   // console.log(searchParam)
  
  useEffect(() => {
   loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam,category]);

  async function loadData() {
    const url =
      "https://free-to-play-games-database.p.rapidapi.com/api/games?platform="+category;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4f7cb24732msh5f485107cc994cdp1727e1jsne30f351ccdc5",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options)  ;
    const data = await response.json();
    let array = data;
    if(searchParam != null){
      let arr = []
      const e =searchParam.toLowerCase()
      // eslint-disable-next-line array-callback-return
      array.map(el =>{
        if(el.title.toLowerCase().indexOf(e) !== -1){
          arr.push(el)
        }
      })
      setelement(arr);
      setLoading(false)
    }else{
    setelement(array);
    setLoading(false)
    }
  }

  if(loading){
    return <LoadComponent/>
  }
  
  return (
    <ul className={styles.grid}>
      {elements.map((element) => (
        <Card key={element.id} movie={element} />
      ))}
    </ul>
  );
}
