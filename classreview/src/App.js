import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import "./scss/style.scss";

// import react router stuff
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activities from "./components/Activities";

function App() {
  return (
    <>
      <Router>
        {/* Navbar  */}
        <Navbar />
        
        {/* Routes Setup  */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/activities" element={<Activities/> } />
          <Route path="/review" element={<Review/> } />
        </Routes>
        
      </Router>

      

      {/* hero-image */}
      <Landing />

      {/* footer */}
      <Footer />
      <div></div>
    </>
  );
}

export default App;
