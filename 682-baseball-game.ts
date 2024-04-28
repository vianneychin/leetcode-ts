function calPoints(operations: string[]): number {
    let stack: number[] = [];
    for (let i = 0; i <= operations.length - 1; i++) {
        let operation = operations[i];
        if (operation === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (operation === "D") {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operation === "C") {
            stack.pop();
        } else {
            stack.push(+operation);
        }
    }
    let finalValue = 0;
    for (let i = 0; i <= stack.length - 1; i++) {
        finalValue += stack[i];
    }
    return finalValue;
}

calPoints(["5", "2", "C", "D", "+"]); // 30
calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]); // 27
