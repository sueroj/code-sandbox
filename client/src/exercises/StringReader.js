import React from 'react';
import Button from 'react-bootstrap/Button';
// Given two strings "abcdefghijk" and "abcdabcdabcd"
// Determine if the two strings are unique characters

export default class StringReader extends React.Component {
    constructor(props) {
        super(props);
        this.solution = this.solution.bind(this);
        this.input = this.props.input;
    };

    solution() {
        let answer = determine(this.input[0], this.input[1]).toString();
        this.props.solve(answer);

        function determine(myString1, myString2) {
            let charArray1 = myString1.split("");
            let charArray2 = myString2.split("");

            for (let x = 0; x < charArray1.length; x++) {
                for (let y = 0; y < charArray2.length; y++) {
                    if (charArray1[x] === charArray2[y]) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    render() {
        return (
            <Button onClick={this.solution}>Solve</Button>
        )
    }
}