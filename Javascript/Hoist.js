console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// console.log(hello);
// hello = 'world';
// output: undefined


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// test();
// function test (){
    // var needle = 'magnet';
    // console.log(needle);
// }
// output: magnet


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';
// function print(){
//         brendan = 'only okay';
//         console.log(brendan);
//     }
// console.log(brendan);
// 'only okay' brendan stays inside the function, and the function is not called


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// console.log(food);
// eat();
// output: chicken, half-chicken


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean;
// mean();
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// food variable stays inside the function so it never gets logged. mean() is also called before the function is assigned to it and throws an error


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);
// genre = "disco";
// console.log(genre);
// output: undefined, rock, r&b, disco


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";
// console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);
// output: seattle, burbank, san jose, san jose


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// output error for the else if statement, dojo is a dictionary and "closed for now" has no key