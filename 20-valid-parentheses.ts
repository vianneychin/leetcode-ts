const matchingBrackets: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
};

function isValid(s: string): boolean {
    let openBracketsStack: string[] = [];
    for (let i = 0; i <= s.length - 1; i++) {
        if (matchingBrackets[s[i]]) {
            if (matchingBrackets[s[i]] === openBracketsStack[openBracketsStack.length - 1]) {
                openBracketsStack.pop();
            } else {
                return false;
            }
        } else {
            openBracketsStack.push(s[i]);
        }
    }
    return openBracketsStack.length === 0;
}

isValid("({{{{}}}))"); // false
isValid("]"); // false
isValid("(}{)"); // false
isValid("{}()[]"); // true
isValid("([)]"); // false
isValid("({[]})"); // true
