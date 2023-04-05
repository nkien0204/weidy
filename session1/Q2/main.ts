const DIGIT_EXPRESSION: RegExp = /^\d+$/;

const isDigit = (character: string): boolean => {
    if (character === "") {
        return false
    }
    return DIGIT_EXPRESSION.test(character);
};

function main() {
    // const input: string[] = ["4", "2", "+", "5", "*"]
    // const input: string[] = ["4", "13", "5", "/", "+"]
    const input: string[] = ["1", "2", "-", "3", "+", "4", "5", "*", "-"]
    let temp: string[] = []
    let buffer: string[] = []

    let output = 0

    for (let i = 0; i < input.length; i++) {
        if (!isDigit(input[i])) {
            output = handleOperator(parseInt(temp[0]), parseInt(temp[1]), input[i])

            temp = []
            let r = buffer.pop()
            if (r !== undefined) {
                temp.push(r)
            }

            temp.push(output.toString())
        } else {
            if (temp.length >= 2) {
                buffer.push(temp[0])
                temp[0] = temp[1]
                temp[1] = input[i]
            } else {
                temp.push(input[i])
            }
        }
    }

    console.log(output)
}

function handleOperator(val1: number, val2: number, ope: string): number {
    switch (ope) {
        case "+": {
            return val1 + val2
        }
        case "-": {
            return val1 - val2
        }
        case "*": {
            return val1 * val2
        }
        case "/": {
            if (val2 == 0) {
                return 0
            }
            return val1 / val2
        }
        default: {
            return 0
        }
    }
}

main()
