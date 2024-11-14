// var a = +prompt("Enter your age","Your age is:");
// var b = a + 10;
// console.log("The out put is", + "" + b)

// var x = "Enter  vlaue";
// var y = "Your vlaue is: "
// var a = +prompt(x,y);
// var b = a + 10;
// document.write("The output is" + "" + b)

// var age = +prompt("Enter your age");
// if(age == 14){
//  alert("Your age is Equal")   
// }
// else if(age < 14){
//     alert("Your age is less");
// }
// else{
//     alert("your age is more")
// }


// var age = prompt("Enter your age");
// var gender = prompt("Enter your gender");
// if(age > 18 && gender == "male"){
//     alert("You are allowed to enroll")
// }
// else if(age < 18 && gender == "female"){
//     alert("She is  allow to enroll")
// }
// else{
//     alert("You are not allowed")
// }


var age = prompt("Enter your age");
var gender = prompt("Enter your gender");
if(age > 18 || gender == "male"){
    alert("You are allowed to enroll")
}
else if(age < 18 || gender == "female"){
    alert("She is  allow to enroll")
}
else{
    alert("You are not allowed")
}


// var a = "5";
// if(a === 5){
//     alert("true");
// }

// else if(a<5){
//     alert("trfa")
// }
// else{
//     alert("false")
// }


// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;

// if(x+y === a-b){
//     alert("Correct")
// }
// else{
//     alert("Incorrect")
// }


// var a = 10;
// if(a !==5){
//     console.log("Correct")
// }
// else{
//     console.log("Incorrect")
// }


// var weight = 300;
// var time = 6;
// var age = 17;
// var gender = "male";

// if(weight > 300 && time < 6 && age > 17 && gender === "male"){
//     alert("Come to over try out");
// }
// // 
// else{
//     alert("come to our cookout")
// }


// var age = "25";
// var age = 21;
// var res = "US";

// if(age > 50 || (age < 21 || res === "US")){  
//     alert("Correct")
// }
// else{
//     alert("Incorrect")
// }


// var percent = +prompt("Enter your percentage");
// if(percent >= 90 && percent <= 100 ){
//     alert("A1")
// }
// else if(percent >= 80 && percent <= 90 ){
//     alert("A+")
// }
// else if(percent >= 70 && percent <= 80 ){
//     alert("A")
// }
// else if(percent >= 60 && percent <= 70 ){
//     alert("B")
// }
// else if(percent >= 50 && percent <= 60 ){
//     alert("C")
// }
// else if(percent >= 45 && percent <= 50 ){
//     alert("D")
// }
// else{
//     alert("Your are Failed:")
// }


// ************************************************Array*****************************


// var std = ["Sufyan","Akber","Azeem","Asghar","Muzammil"]

// alert("welcome" + std[3])



// *************Array index mai value add ***************************

// var names = [];

// names[0] = "basit"
// names[1] = "same"
// names[2] = "allu"
// names[3] = "bhallu"
// names[4] = "mota"
// names[5] = "kalu"

// console.log(names)


// ab mujh index delet krna h to pop ek property ha ********last remove pop*************

// var std = ["Sufyan","Akber","Azeem","Asghar","Muzammil"]

// std.pop()
// console.log(std)

// ab mujh index add  krna h last m to push ek property ha********last add push********

// var std = ["Sufyan","Asghar","Muzammil"]
// std.push("ahsan")
// std.push("ahsan","sharukh")
// console.log(std)

// ******************** shift start remove method ***********************

// var std =["Sufyan","Asghar","Muzammil"]

// std.shift()
// console.log(std)

// ********************nshift start add method ***********************

// var std = [ "Sufyan","Asghar","Muzammil"]

// std.unshift("azeem","azeem","azeem","azeem","azeem","azeem","azeem","azeem")
// console.log(std)

// ********************splice method beach s remove or add kr skty hen ***********************


// var std = ["Sufyan","Asghar","Muzammil"]

// std.splice(0,2,"kashan")
// console.log(std)

// ********************slice method index copy krna hai mujh kitna khn skhn tk kr skty hen ***********************

// var std = ["Sufyan","Akber","Azeem","Asghar","Muzammil"]

// var copyStd = std.slice(1,3)
// console.log(std)
// console.log(copyStd)