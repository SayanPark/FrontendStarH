import { Route, Routes, HashRouter } from "react-router-dom";

// from elements
import Head from "./components/elements/Head";
// from layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Scripts from "./components/layout/Scripts";
// from pages
import Review from "./components/pages/Review";
import Mainpage from './components/pages/Mainpage';

function App() {

  return (
    <>
    <HashRouter>
      <Head />
      <Navbar />
      
      <Routes>
        <Route path="/review" element={<Review />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>

      <Footer />
      <Scripts />
    </HashRouter>
      
    </>
  )
}

export default App
