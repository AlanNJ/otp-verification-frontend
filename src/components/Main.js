import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import {
	InputGroup,
	InputLeftElement,
	Input,
	Button,
	Spinner,
} from "@chakra-ui/react";
import { PhoneIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import axios from "axios";

const Main = () => {
	const [number, setNumber] = useState();
	const [loading, setLoading] = useState(false);
	const [details, setDetails] = useState();
	const getOtp = async (e) => {
		setLoading(true);
		const data = await axios.post("http://localhost:5000/auth", { number });
		setDetails(data);
		setLoading(false);
	};
	console.log(number);
	return (
		<>
			<h1>
				Demonstration of OTP registration using <b>Node</b> and <b>Express</b>
			</h1>
			<div className="container">
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<PhoneIcon color="gray.500" />}
					/>
					<Input
						type="tel"
						placeholder="Phone number"
						size={"lg"}
						width="60vw"
						onChange={(e) => setNumber(e.target.value)}
					/>
				</InputGroup>
				<Button
					rightIcon={<ArrowForwardIcon />}
					colorScheme="teal"
					variant="outline"
					onClick={getOtp}
				>
					Send OTP
				</Button>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</div>
		</>
	);
};
export default Main;
