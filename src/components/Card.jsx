import { Link } from "react-router-dom";
import styles from "./Card.module.css"
export function Card({ movie }) {

    return (
        <li className={styles.card}>
            <Link to={"/movies/" + movie.id}>
                <img 
                className={styles.imagee} 
                 width={365}
                 height={206} 
                 src={movie.thumbnail} 
                 alt={movie.title} />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}