import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
	return (
		<>
		<Navbar />
		<Suspense fallback={Home}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element />
					<Route path="/projects" element />
					<Route path="/contact" element/>
				</Routes>
			</BrowserRouter>
		</Suspense>
		</>
	);
};

export default App;
