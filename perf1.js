//1(a)This will distinguish the differences between var, let, and const in terms of scope
//Blocks - defined by the curly braces {}
function scope_test() {
    if (true) {
        var a = "var";  // var declaration is function-scoped or global scoped, meaning it is accessible outside this block.
        let b = "let";   // let is block-scoped, meaning it is only accesible inside this block(block where it was declared).
        const c = "const"; //const is Block-scoped as well, just like let. 
        console.log("Inside the block:", a, b, c);
    }
    console.log("Outside the block:", a); 
// console.log("Oustide the block:",a,b,c) Output: Inside the block: var let const  ReferenceError: b is not defined. 
}

scope_test();

/*However for var, there  is an exception. When var is declared inside a function, it cannot be accessed outside the function.
Example. 
function var_inside(){
   var b = "Inside function";
}
var_inside();
console.log(b); (Output: Error: 'b' is not defined) */


//1(b) This will distinguish the diffenrences of the 3 when it comes to Redeclaration and Reassignment 
// Reassignment - changing the value of an existing variable without declaring it again.
//Redeclaration - declaring the same varaible more than once within the same scope.
var a = 5;
var a = 20;// var can be redeclared in the same scope (when it is inside a function)
console.log("Redeclared var:", a);

var aa = 1;
aa=2;
console.log("Reassigned var:", aa); //var can be reassigned as well

let b = 5
//let y = 20; Output = SyntaxError: Identifier 'y' has already been declared
// This happens because let enforces block-scoping and does not allow duplicate variable declaration with the same scope. 
b=20; //let declarations could not redeclare but it could reassign.
console.log("Reassigned let:", b);

const c = 5; 
//const c = 20; Output = SyntaxError: Identifier 'c' has already been declared
//c = 20; Output = TypeError: Assignment to constant variable
// const cannot be reassigned and redeclared. 
console.log("const stays the same:", c);


//2. Concept of falsy values in Javascript 
// This will check if a value is falsy or truthy
//Falsy Values-these evaluates to false when encountered in Boolean context, such as within conditional statements. 
//Falsy Values in Javascript: false,null,undefined,o,-0,Nan(Not-A-Number,'',"",``).

// Example 1: 0 (Falsy)
if (0) {
    console.log("0 is truthy");
} else {
    console.log("0 is falsy.");
}

// Example 2: Empty String "" (Falsy)
if ("") {
    console.log('""  is truthy ');
} else {
    console.log('""  is falsy.');
}

// Example 3: null (Falsy)
if (null) {
    console.log("null is truthy");
} else {
    console.log("null is falsy.");
}

if ("Hello") {
    console.log('"Hello" is truthy.');
}