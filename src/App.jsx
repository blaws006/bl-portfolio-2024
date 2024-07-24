/* Components */
import Header from './components/Header';
import Footer from './components/Footer';

/* Pages */
import IntroPage from './pages/IntroPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

/* Libraries */
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<div className='flex flex-col min-h-screen justify-between'>
			<Header />
			<Routes>
				<Route path='/bl-portfolio-2024/' element={<IntroPage />} />
				<Route path='/bl-portfolio-2024/portfolio' element={<PortfolioPage />} />
				<Route path='/bl-portfolio-2024/contact' element={<ContactPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
