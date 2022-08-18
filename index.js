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
        name: "X",
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
    return (
        <>
            <div id="MyCalculator">
                <div id="buttonsHolder">
                    {buttons.map((button) => {
                        return (
                            <button id={button.id}>{button.name}</button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));