import React, { useEffect, useState } from 'react';
import 'components/Sandbox.css';

export default function Sandbox(props) {
    const exercise = props.exercise;
    const answer = "Code Sandbox";
    const [solution, setSolution] = useState("");
    const [result, setResult] = useState("No Match");

    // UseEffect refreshes DOM after react state changes.
    useEffect(() => {
        implementSolution();
        if (answer === solution) {
            setResult("Match");
        } else setResult("No Match");

        //Solution Here
        function implementSolution() {
            let solution = ["Billy", "Bob"];
            let seperator = " and ";

            setSolution(solution.join(seperator));
        }

    }, [solution]
    );



    return (
        <>  <div className="expected-output">
            {answer}
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