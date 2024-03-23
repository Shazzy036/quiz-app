import React, { useState, useEffect } from "react";
import { questions } from "../data/questions";

const Question = () => {
	const [index, setIndex] = useState(0);
	// const [ques, setQues] = useState(questions[index]);
	const [correct, setCorrect] = useState(0);
	const [marked, setMarked] = useState("");

	useEffect(() => {}, [index]);

	function onSubmit() {
		setIndex(index + 1);
		// setQues(questions[index]);
		if (marked === questions[index].answer) {
			setCorrect(correct + 1);
		}
	}

	return (
		<>
			{questions[index] ? (
				<div>
					<h2 className="left">
						Question no. {questions[index].qNo}.
					</h2>
					<h3> {questions[index].question} </h3>
					<ol>
						{questions[index].options.map((option, idx) => {
							return (
								<li key={idx}>
									<button
										className="left"
										onClick={() => {
											setMarked(option);
										}}
									>
										{option}
									</button>
								</li>
							);
						})}
					</ol>
					<button className="left" onClick={onSubmit}>
						Submit
					</button>
				</div>
			) : (
				<div>
					<h1>Quiz end</h1>
					<h3>You got {correct} correct answers</h3>
					<button
						onClick={() => {
							setIndex(0);
						}}
					>
						Reset Quiz
					</button>
				</div>
			)}
		</>
	);
};

export default Question;
