//FUNCTION DECLARATIONS

function greet(firstName = "Mr", lastName = "Whalen"){
//      console.log("Hello");
return "hello" + firstName + lastName;
}

// console.log(greet("Joe", "Mama"));

//FUNCTION EXPRESSIONS

const square = function(x = 3){
        return x*x;
};

console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS

// (function(){
//         console.log("IIFE RAN...");
// }
// )();

// (function(name){
//         console.log("Hello" + name);
// }
// )("Brad");

/// PROPERTY METHODS

const todo = {
        add: function(){
                console.log("Add todo...");
        },
        edit: function(id){
                console.log(`Edit todo ${id}`);
        }
}

todo.delete = function(){
        console.log("Delete todo...");
}

todo.add();
todo.edit(22);
todo.delete();