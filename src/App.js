import * as React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Home/Header";
import About from "./Components/About/About";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import Service from "./Components/Service/Service";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/service" element={<Service />} />
			</Routes>
		</div>
	);
}

export default App;
