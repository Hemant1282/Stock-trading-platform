import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import SignupPage from "./components/SignupPage/SignupPage.jsx"
import AboutPage from "./components/AboutPage/AboutPage.jsx"
import ProductsPage from "./components/ProductsPage/ProductsPage.jsx"
import PricingPage from "./components/PricingPage/PricingPage.jsx"
import SupportPage from "./components/SupportPage/SupportPage.jsx"
import { Routes,Route } from "react-router-dom";

//Logic files
import ScrollToTop from "./Logic/ScrollToTop.jsx";



function App() {
  return ( 
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
        <Routes>
          <Route path = "/" element = {<HomePage></HomePage>}></Route>
          <Route path = "/signup" element = {<SignupPage></SignupPage>}></Route>
          <Route path = "/about" element = {<AboutPage></AboutPage>}></Route>
          <Route path = "/products" element = {<ProductsPage></ProductsPage>}></Route>
          <Route path = "/pricing" element = {<PricingPage></PricingPage>}></Route>
          <Route path = "/support" element = {<SupportPage></SupportPage>}></Route>
        </Routes>
      <Footer></Footer>
    </>
   );
}

export default App;