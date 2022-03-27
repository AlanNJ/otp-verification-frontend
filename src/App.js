import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function App() {
	const [number, setNumber] = useState();
	const [loading, isLoading] = useState(false);

	const getOtp = (e) => {
		setNumber(e.target.value);
	};
	console.log(number);
	return (
		<div className="App">
			<ChakraProvider>
				<Main getOtp={getOtp} />
			</ChakraProvider>
		</div>
	);
}

export default App;
