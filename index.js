const buttons = [
    {
        name: "AC",
        id: "clear"
    },
    {
        name: "/",
        id: "divide"
    },
    {
        name: "*",
        id: "multiply"
    },
    {
        name: "7",
        id: "seven"
    },
    {
        name: "8",
        id: "eight"
    },
    {
        name: "9",
        id: "nine"
    },
    {
        name: "-",
        id: "subtract"
    },
    {
        name: "4",
        id: "four"
    },
    {
        name: "5",
        id: "five"
    },
    {
        name: "6",
        id: "six"
    },
    {
        name: "+",
        id: "add"
    },
    {
        name: "1",
        id: "one"
    },
    {
        name: "2",
        id: "two"
    },
    {
        name: "3",
        id: "three"
    },
    {
        name: "=",
        id: "equals"
    },
    {
        name: "0",
        id: "zero"
    },
    {
        name: ".",
        id: "decimal"
    }
];
function App() {
    const [output, setOutput] = React.useState("0");
    function handleClick(clickedButton) {
        switch (clickedButton) {
            case "AC":
                setOutput(0);
                break;
            case "1":
                const concatOne = (parseInt(output) === 0 ? "" : output) + "1";
                setOutput(concatOne);
                break;
            case "2":
                const concatTwo = (parseInt(output) === 0 ? "" : output) + "2";
                setOutput(concatTwo);
                break;
            case "3":
                const concatThree = (parseInt(output) === 0 ? "" : output) + "3";
                setOutput(concatThree);
                break;
            case "4":
                const concatFour = (parseInt(output) === 0 ? "" : output) + "4";
                setOutput(concatFour);
                break;
            case "5":
                const concatFive = (parseInt(output) === 0 ? "" : output) + "5";
                setOutput(concatFive);
                break;
            case "6":
                const concatSix = (parseInt(output) === 0 ? "" : output) + "6";
                setOutput(concatSix);
                break;
            case "7":
                const concatSeven = (parseInt(output) === 0 ? "" : output) + "7";
                setOutput(concatSeven);
                break;
            case "8":
                const concatEight = (parseInt(output) === 0 ? "" : output) + "8";
                setOutput(concatEight);
                break;
            case "9":
                const concatNine = (parseInt(output) === 0 ? "" : output) + "9";
                setOutput(concatNine);
                break;
            case "0":
                const concatZero = (parseInt(output) === 0 ? "" : output) + "0";
                parseInt(output) === 0 ? setOutput("0") : setOutput(concatZero);
                break;
            case "/":
                const divide = (parseInt(output) === 0 ? "" : output) + "/";
                setOutput(divide);
                break;
            case "+":
                const add = (parseInt(output) === 0 ? "" : output) + "+";
                setOutput(add);
                break;
            case "*":
                const multiply = (parseInt(output) === 0 ? "" : output) + "*";
                setOutput(multiply);
                break;
            case "-":
                const subtract = (parseInt(output) === 0 ? "" : output) + "-";
                setOutput(subtract);
                break;
            case ".":
                const dot = (parseInt(output) === 0 ? "" : output) + ".";
                setOutput(dot);
                break;
            case "=":
                const evaluated = eval(output);
                setOutput(evaluated);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div id="MyCalculator">
                <div id="display">{output}</div>
                <div id="buttonsHolder">
                    {buttons.map((button) => {
                        return (
                            <button id={button.id} onClick={() => {
                                handleClick(button.name);
                            }}>{button.name}</button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));