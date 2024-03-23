import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" Component={<h1>404 no page found</h1>} />
			</Routes>
		</>
	);
}

export default App;
