/* Components */
import Header from "./components/Header"
import Footer from "./components/Footer";

/* Pages */
import IntroPage from "./pages/IntroPage"
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from "./pages/ContactPage";

/* Libraries */
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App