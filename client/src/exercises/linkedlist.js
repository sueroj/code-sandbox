import React, { useEffect, useState } from 'react';
import 'components/Sandbox.css';

export default function LinkedList(props) {
    const exercise = props.exercise;
    const answer = "Code Sandbox";
    const [solution, setSolution] = useState("");
    const [result, setResult] = useState("No Match");

    // UseEffect refreshes DOM after react state changes.
    useEffect(() => {

        //Solution Here
        function implementSolution() {
            let solution = ["Billy", "Bob"];
            let seperator = " and ";
    
            setSolution(solution.join(seperator));
        }

    }, [solution]
    );

    return solution;
}