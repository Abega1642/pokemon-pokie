import { useNavigate } from "react-router-dom";
import "./notFound.css"


export default function NotFound() {
    const navigate = useNavigate();
    
      const handleBackClick = () => {
        navigate("/");
      };


    return (
        <>	
			<main className="back">
		        <div className="notFound-card">
		            <button onClick={handleBackClick} className="back-button">
		                ⬅ Back
		            </button>
		            <h3>404 - Pokemon not found</h3>
		        </div>
			</main>
        </>
    );
}
