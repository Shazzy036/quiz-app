import React, { useState } from "react";
import Question from "../components/Question";
import { questions } from "../data/questions";

const Home = () => {

	return (
		<>
			<div>Quizz app</div>
			<Question />
		</>
	);
};

export default Home;
