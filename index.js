// console.log("first");
// setTimeout(function () {
//   console.log("second");
// }, 0);
// console.log("third");

// console.log("first");
// abc();
// console.log("third");

// function abc() {
//   setTimeout(function () {
//     console.log("second");
//   }, 0);
// }

//------------------------------

// var x = 0;
// function doSomething(itr, cb) {
//   var y = 0;
//   setTimeout(() => {
//     cb(null, x + y); //y=5000   => x+y = 5000
//   }, y); // y=0
//   for (var i = 0; i < itr; i += 1) {
//     y += 1;
//   }
//   // console.log(x)
//   // console.log(y)
//   // console.log(x+y)
// }
// doSomething(5000, (err, result) => console.log(result));
// // console.log(y)

//-------------------------

// let N = 10;
// var array = [5, 1,3,4,6,10,8,9,7]

// // var missing = new Array();
// var missing = [];

// for (var i = 1; i <= N; i++) {
//   if (array.indexOf(i) == -1) {
//     missing.push(i);
//   }
// }
// console.log(missing);

//------------------------------

// let Arr1 = [1,5,8,11]
// let Arr2=  [3,6,9,10,15,20] //Merge two sorted array

// let newArr=[...Arr1, ...Arr2]
// console.log(newArr)
// let x= newArr.sort((a, b)=> a - b)
// console.log(x)

//-----------------------------

/*<script>
	var arr = ["apple", "mango", "apple",
			"orange", "mango", "mango"];

	function removeDuplicates(arr) {
		return {arr.filter((item,
			index) => arr.indexOf(item) === index)};
	};
	removeDuplicates(arr => {arr.filter (item,
			index) => arr.indexOf(item) === index)}  // indexOf(apple) always 0


	console.log(removeDuplicates(arr));
</script> */

//---------------------------------

// let x = 10;

// let y = x++;
// console.log(y); // 10
// console.log(x); // 11

// let role = "guest";

// switch (role) {
//   case "guest":
//     console.log("Guest user");
//   // break;
//   case "moderator":
//     console.log("moderator user");
//     break;
//   default:
//     console.log("Unknown user");
// }

// function showNumbers(limit) {
//     for (i = 0; i < limit + 1; i++) {
//         if (i % 2 === 0) console.log(i , "EVEN")
//         else console.log(i , "ODD") // else is compulsory
//     }
// }

// showNumbers(10)

// function max1(number1, number2) {
//     if (number1>number2) return number1
// 	else return number2  // // else is optional bcoz in previous line we already return something from the function means we are done
// }

// console.log(max1(4, 9))

// let x = 0;
// function sum(limit) {
// 	// let x = 0;

// 	for (let i = 0; i <= limit; i++) {
// 		if (i % 3 === 0 || i % 5 === 0)
// 			x += i
// 	}

// 	return x
// }

// console.log(sum(10))
// console.log(x)

//prime number-----------------------

// showPrime(20);

// Mosh solution
// function showPrime(limit) {
//     for (let number = 2; number <= limit; number++) {
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number);
//     }
// }

// // Solution applying the Single Responsibility Principle

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;
//   return true;
// }

// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

//----------------------
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// setTimeout(function () {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }, 1000);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   //cant use const in place of let
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
// }

// function xyz() {
//   //   var i = 0;
//   var i = 9;
//   //   let i = 0;
//   //   let i = 9;
//   return function abc() {
//     console.log(i);
//   };
// }
// var a = xyz();
// a();
//-------------------------

// const x = { foo: 1 };
// output = function () {
//   delete x.foo;
//   return x.foo;
// };
// console.log(output);  // function reference
//----------------------------

// let x = [1, 2, 5, 8, 12, 18];
// console.log(Math.max(...x));
// let sum = 0;
// for (let i of x) {
//   sum = sum + i;
// }
// console.log(sum);

//--------------------------

// a = 2;
// b = a++;
// c = ++b;
// console.log(a);
// console.log(b);
// console.log(c);

//-------------------

// related to emptying an array(MOSH)
// let a = {
//   id: 5,
// };
// let b = a;
// b.id = 6;
// // b = null;   // a will not be null
// console.log(a);
// console.log(b);

// var a;
// console.log(a);
// a = 5;
// console.log(a);

// console.log(a);
// var a;
// a = 5;
// console.log(a);

// let a;
// console.log(a);
// a = 5;
// console.log(a);

// console.log(a);   // error
// let a;
// a = 5;
// console.log(a);

//----------------
// function abc() {
//   console.log(a, b, c);

//   var a = 10;
//   let b = 10;
//   const c = 10;
// }

// abc(); //error
