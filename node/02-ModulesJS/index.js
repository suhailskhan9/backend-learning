/*
    require is CommonJS, import is ES Modules — same job, different systems
    require runs at runtime, import is resolved before any code runs
    require can go anywhere — inside ifs, functions, wherever. import must be at the top level
    Node defaults to CJS — to use ESM add "type": "module" to package.json or use .mjs extension
    ESM can import CJS, CJS cannot require ESM
    __dirname and __filename exist in CJS automatically, in ESM you have to build them manually
    Most backend/Node codebases use require, modern frontend tooling uses import

*/

const { add, subtract, multiply, divide } = require('./math.js')

console.log(add(3,4))
console.log(subtract(4,3))
console.log(multiply(4,4))

try {
    console.log(divide(4, 0))
} catch (error) {
    console.log(error)
}