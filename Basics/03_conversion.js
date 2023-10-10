let age = "19" //value in string
// console.log(age) //print
// console.log(typeof(age)) //typeof 
let age01 = Number(age) //conversion to Number 
// console.log(typeof(age01))

let age0 = "19abc" //value in string not a complete number
// console.log(age0) //print
// console.log(typeof(age0)) //typeof 
let age02 = Number(age0) //conversion to Number 
// console.log(typeof(age02))
// console.log(age02) //resulted NaN not a number 


//"33" => 33
// "33abc" => NaN
//true => 1; false = 0
// 1=> true ; 0=> false [ boolean con]
// "" => false ; "something"=>true 



//*******************operations ***********

let value = 3
let negvalue = -value
// console.log(negvalue)

//basic math operations
 /*console.log(2+2)
 console.log(2*2)
 console.log(2-2)
 console.log(2**2)
 console.log(2/2)
 console.log(2%2)*/

 let str1= "hello !"
 let str2 = " Prince"
 let str3 = str1+str2 //str concat
//  console.log(str3)

console.log("1"+2+2) //if string is first then it converts rest to string
console.log(1+2+"1") //if operations are first , then it will perform operation first and and string concat
  