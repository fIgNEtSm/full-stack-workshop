function add(a, b) { // function declaration
    return a + b // returning function
}

document.writeln("Normal function calling: ", add(5, 7), "<br />") // function calling

// arrow function
var a = (x, y) => x + y

document.writeln("Arrow function: ", a(5, 4), "<br />")

// Object concept
var details = {
    "name": "Vishwa",
    "age": 22,
    "gender": "Male"
}

// for in loop
for (item in details) {
    document.writeln(item, ": ", details[item], "<br>")
}

// array concept
let array = [1, 2, 3, 4, 5, 6, 7, 8]
document.writeln(array)

function greet() {
    alert("hello");
}