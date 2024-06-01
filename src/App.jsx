// Importing pages and components
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppProvider from "./providers/AppProvider";
import HomePage from "./pages/homepage/HomePage.jsx";
import PortfolioPage from "./pages/portfolio/Portfolio.jsx";
import ContactPage from "./pages/contact/Contact.jsx";
import ResumePage from "./pages/resume/Resume.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

// Exporting functionable component
export default function App() {

  return (
    <>
      <AppProvider>
        <div>
          <Header />
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/resume" element={<ResumePage />} />
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </AppProvider>
    </>
  )
};


