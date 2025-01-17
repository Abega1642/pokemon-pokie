import { Content } from "../smarts/Content"
import "./home.css";

export function Home() {
    return (
        <main className="box">
            <div className="home-container">
                <div className="home-header">
                    <h1>Search your Pokemon here</h1>
                </div>
                <div className="pokeball-container">
                    <img className="pokeball" src="../../../assets/Poké_Ball-RS.png" alt="pokeball" />
                </div>
                <Content />
            </div>
        </main>
    );
}