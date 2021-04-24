const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const run = function() {
    rl.question("\nWhich side are you looking for? \n[a, b, c, exit]: ", function(side) {
        if (side.toLowerCase() === 'a') {
            rl.question("give me (b) and (c): ", function(otherSides) {
                const sides = otherSides.split(" ")
                const b2 = Number(sides[0])**2
                const c2 = Number(sides[1])**2
                const a = Math.sqrt(c2 - b2)
                console.log(`\nSide (a) is equal to ${a.toFixed(2)}`)
                run()
            })
        }
        else if (side.toLowerCase() === 'b') {
            rl.question("give me (a) and (c): ", function(otherSides) {
                const sides = otherSides.split(" ")
                const a2 = Number(sides[0])**2
                const c2 = Number(sides[1])**2
                const b = Math.sqrt(c2 - a2)
                console.log(`\nSide (b) is equal to ${b.toFixed(2)}`)
                run()
            })
        }
        else if (side.toLowerCase() === 'c') {
            rl.question("give me (a) and (b): ", function(otherSides) {
                const sides = otherSides.split(" ")
                const a2 = Number(sides[0])**2
                const b2 = Number(sides[1])**2
                const c = Math.sqrt(a2 + b2)
                console.log(`\nSide (c) is equal to ${c.toFixed(2)}`)
                run()
            })
        }
        else if (side.toLowerCase() === 'exit') {
            console.log("=======================================================================\n")
            rl.question("Do you want to exit?[y, n]: ", function(exit) {
                if (exit.toLowerCase() === 'y') {
                    process.exit(0)
                }
                else if(exit.toLowerCase() === 'n') {
                    run()
                }
            })
        }
    })
}
run()