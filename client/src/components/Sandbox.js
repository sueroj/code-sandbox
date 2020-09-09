import React, { useEffect, useState } from 'react';
import 'components/Sandbox.css';
import StringReader from 'exercises/StringReader';

export default function Sandbox(props) {
    const exercise = props.exercise;
    const answer = "Code Sandbox";
    const [solution, setSolution] = useState("");
    const [result, setResult] = useState("No Match");
    const scenario = <><p>Given two strings abcdefghijk and abcdabcdabcd</p>
        <p>Determine if string has all unique characters</p></>;
    const input = ["abcdefghijk", "abcdabcd"];

    // UseEffect refreshes DOM after react state changes.
    useEffect(() => {
        if (answer === solution) {
            setResult("Match");
        } else setResult("No Match");

        //Solution Here
        // function implementSolution() {
        //     let solution = ["Billy", "Bob"];
        //     let seperator = " and ";

        //     setSolution(solution.join(seperator));
        // }

    }, [solution]
    );

    const solve = (answer) => {
        setSolution(answer);
    }

    return (
        <>  <div className="expected-output">
            {scenario}
        </div>

            <div className="solve-button">
                <StringReader className="btn" solve={solve} input={input} />
            </div>

            <div className="actual-output">
                {solution}
            </div>


            <div className="result-window">
                {result}
            </div>
        </>
    );
}