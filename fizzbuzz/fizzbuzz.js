
let numeroescolhido = 100 // Digite um numero para fazer o teste

for (let i = 1; i <= numeroescolhido; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else (console.log(i));
}
