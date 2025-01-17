import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/dumbs/Home";
import Details from "./components/details/smarts/Details";
import NotFound from "./components/notFound/notFound";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-details/:pokeName" element={<Details/>} />
        <Route path="/not-found" element={<NotFound/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App
