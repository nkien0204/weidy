function main() {
    // const input: number[] = [2, 3, -2, 4]
    const input: number[] = [-2, 0, -1]
    let output = 0

    if (input.length == 0) {
        console.log(output)
        return
    }

    let max = input[0]
    let min = input[0]
    output = input[0]

    for (let i = 1; i < input.length; i++) {
        let tempMax = Math.max(input[i], max * input[i], min * input[i])
        min = Math.min(input[i], max * input[i], min * input[i])
        max = tempMax

        output = Math.max(output, max)
    }

    console.log(output)
}

main()
