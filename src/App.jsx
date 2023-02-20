import styles from "./App.module.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Details } from "./pages/Deatails";
import { Home } from "./pages/Home";
import { SearchComponent } from "./components/SearchComponent";
//import {Movie} from "./pages/Movie"

export function App() {
    return (
        <Router>
            <header className={styles.header}>
                
                
                <div   className={styles.row} >
                <Link className={styles.title} to="/" >
                    GamesData
                </Link>
                <Link to="/browser">Browser</Link>
                <Link to="/pc">Pc</Link>
                <SearchComponent />
                </div>
                
            </header>
            <main >
                <Routes>
                    <Route exact path="/movies/:elementID" element={<Details/>} />
                    <Route path="/" element={<Home category={"all"}/>} />
                    <Route path="/pc" element={<Home category={"pc"}/>} />
                    <Route path="/browser" element={<Home category={"browser"}/>} />   
                </Routes>
            </main>
            
        </Router>);
}