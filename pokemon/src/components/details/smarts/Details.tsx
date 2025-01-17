import { useLocation } from "react-router-dom";
import Display from "../dumbs/display";


export default function Details() {
  const location = useLocation();
  const { imgURI, pokemon } = location.state || {};

  return (
    <>
        <div className="details-container">
      		<Display pokemon={pokemon} imgURI={imgURI} />
   		</div>
    </>
  );
}
