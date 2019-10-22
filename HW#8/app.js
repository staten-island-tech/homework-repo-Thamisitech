const alphabet = ["A", "B", "C", "D", "E", "F"]
const numbers = ["1", "2", "3", "4", "5", "6"]

// const a = alphabet[0]
// const b = alphabet[1]

// const [a,,c,  ... rest] = alphabet

const newArray = alphabet.concat(numbers)

// console.log(a)
// console.log(c)
// console.log(rest)

// console.log(newArray)

// console.log(array)

function sumAndMultiply(a, b){
    return[ a+b, a*b, a/b]
}

const [sum, multiply, divison = "No divsion"]  = sumAndMultiply(2,3)

// console.log(sum)
// console.log(multiply)


// Object Destructuring

const personOne = {
    name: "kyle",
    age: 24,
    address: {
        city: "Somewhere"
    }
}

const personTwo = {
    name: "Sally",
    age: 32,
    favoriteFood: "Watermelon",
    address: {
        city: "Somewhere else",
        state: "Another one of them"
    }
}

// const {name: firstName, address: { city }} = personTwo

// console.log(firstName)
// console.log(city)

function printUser({ name, age}){
    console.log(`Name is: ${name}. Age is ${age}`)
}

printUser(personOne)
