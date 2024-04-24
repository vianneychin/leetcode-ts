const matchingBrackets: Record<string, string> = {
jk    ")": "(",
    "}": "{",
    "]": "[",
};

function isValid(s: string): boolean {
    let stack:string[] = [];
    for (let i = 0; i <= s.length - 1; i++) {
        let bracket = s[i];
        if (matchingBrackets[bracket]){
            const previousItemAddedToTheStack = stack[stack.length - 1];
            if (stack.length > 0 && previousItemAddedToTheStack === matchingBrackets[bracket]) {
                stack.pop();
            } else {
                console.log(false)
                return false;
            }
        } else {
            stack.push(bracket);
        }
    }
jk
    return stack.length === 0;
}

isValid("(}{)");
isValid("{}()[]");
isValid("([)]");
