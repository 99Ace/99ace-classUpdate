import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import "./scss/style.scss";

function App() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* hero-image */}
      <Landing />

      {/* footer */}
      <Footer />
      <div></div>
    </>
  );
}

export default App;
