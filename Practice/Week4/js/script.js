// /*
// JS Basics*/

// var a="Hello Global";
// console.log(a);
// function A(){
//   var a="in A";
//   console.log(a);
//   B();

// function B(){
//   console. log(a);
// }
// }
// A();


// Objects

// var entertainment = new Object();
// entertainment.industry_name='bollywood';
// // console.log(entertainment);

// entertainment.actor= new Object();
// entertainment.actor.name = "SRK";

// // console.log(entertainment.actor);

// entertainment.actor.genre="Love";

// entertainment.actress = new Object();

// entertainment.actress["name"]="Tapsee";
// entertainment.actress["genre"]="action";

// console.log(entertainment);

// var music

// var music={
// 	Singers:{
// 			name: {
// 				1:"Arijit",
// 		  		2:"Darshan",
// 		  		3:"Himesh"

// 				},
// 			Songs:{
// 				1:"Sun raha hain na",
// 				2:"Hawa Banke",
// 				3:"Main Jahaan Rahoon"
// 				}
// 			}	
// };



// console.log(music);


// Functions Explained

// function subtract(x,y){
// 	return x-y;
// }

// console.log(subtract(3,2));


// function factory

// function divide(x){
// 	var value=function(y){
// 		return x/y;
// 	};
// 	return value;
// }

// var divisor4=divide(4);
// console.log(divisor4(8));
// var divisor10=divide(10);
// console.log(divisor10(5));

// function evaluate(y,operation){
// 	return operation(y);
// }


// var total=evaluate(5, divisor4);
// console.log(total);

// total=evaluate(100,divisor10);
// console.log(total);





// // Function factory

// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));



// // Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);



// // values copied by reference

// var a={y:10};
// // var b=a;
// // console.log(a);
// // console.log(b);


// // b.y=50;
// // console.log(a);
// // console.log(b);



// // Values passed by reference

// function editvalue(value){
// 	console.log("Value passed by reference");
// 	console.log(value);
// 	value.y=100;
// }
// editvalue(a);
// console.log("Value after passed and edited");
// console.log(a);


// function constructor
// function text(){
// 	console.log(this);
// 	// this.show="Hello World";
// 	// console.log(window.show);
// }

// text();



// function sphere(radius){
// 	this.radius=radius;

// }


// sphere.prototype.Area=function(){
// 	return Math.PI*Math.pow(this.radius,3);	
// };
// 

// var sphere1= new sphere(5);
// console.log(sphere1.Area());



// ObjectLiteral
// var literalshpere={
// 	radius:10,

// 	Area:function(){
// 		console.log(this);
// 		return Math.PI*Math.pow(this.radius,3);
// 	}
// };

// console.log(literalshpere.Area());


// var literalCube={
// 	length:10,
// 	width:10,
// 	height:10,

// 	Area: function(){
// 		self=this;
// 		console.log(this);
// 		return this.length*this.width*this.height;


// 		var increaselength=function(len){
// 			return self.length+=len;
// 		};
// 		var increasewidth=function(wid){
// 			return self.width+=wid;
// 		};
// 		var increaseheight=function(hit){
// 			return self.height+=hit;
// 		};
// 	}
// };

// console.log(literalCube.Area().increaselength(1)); //How to call increaselength
// console.log(literalCube.Area());



// Arrays in JS



// closure
// function createmultiplier(x){
// for (i=0;i<5;i++){
// 	a[i]='Hello';
// }
// console.log(a);


// var b=['Hello','is','repeated','five','times'];
// console.log(b);
// b[100]="haddi";
// for (var i = b.length - 1; i >= 0; i--) {
// 	console.log(b[i]+i);
// }

// var b1={
// 	Item:"Laptop",
// 	Company:"Dell",
// 	Work:"Interface"
// };
// b1.age=1.8;
// for (var n in b1){
// 	console.log(n+" : "+b1[n]);
// 


// closure

// function createmultiplier() {
// 	var muliplier=3;
// 	return(
// 		function(){
// 			var x=5;
// 			console.log( x*muliplier);
// 			x++;
// 			muliplier++;

// 		});
// 	}

// var triple = createmultiplier();
// triple();
// triple();

// function outer() {
// var b = 10;
// var c = 100;
//    function inner() {
        
//          var a = 20; 
//          console.log("a= " + a + " b= " + b);
//          a++;
//          b++;
//     }
//    return inner;
// }
// var X = outer();  // outer() invoked the first time
// var Y = outer();  // outer() invoked the second time
// //end of outer() function executions
// X(); // X() invoked the first time
// X(); // X() invoked the second time
// X(); // X() invoked the third time
// Y(); // Y() invoked the first time


// Namespaces
// var carrunner={};
// carrunner.run=function () {
// 		console.log("Car runs");
// 	}

// var bikerunner={};
// bikerunner.run=function () {
// 		console.log("bike runs");
// 	}

// carrunner.run();
// bikerunner.run();

// Immediately invoked Function Expression

// (function () {
// 	// body...
// 	console.log("Hello, How are you !!");
// })();



var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
console.log(names[0].charAt(0).toLowerCase() == 'j');
