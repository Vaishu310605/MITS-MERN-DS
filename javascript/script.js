// console.log("My cutest fellow piee..");
// //Reintialize and redeclare also
// var a;//global scope
// a=10;
// var a;
// a=20;
// //Reintialize
// let b=10; //let=block scope
// //cant redeclare or reintialize
// const c=30;//constant scope cant be undo
// //cant redeclare too c=40;
// console.log(a);
// console.log(b);
// console.log(c);
// var num=10;
// var str="PUTTI";//`` " " ''
// var bool=true;
// var un;
// var nu=null;
// var big=12345678n;
// var symbol=Symbol('li');
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);
// var arr=[1,2,3,4,1]
// console.log(typeof arr);
// var Obj=
// {
//     name:"Vaishu",Dept:`ds`
// }
// console.log(Obj);
// console.log(typeof Obj);
// //arithmetic operator
// var a=10;
// var b="2";
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a*b);
// console.log(a**b)
//==value//
//===data type*/
//conditional statements

// var a=10;

// if(a%2===0)
// {
//     console.log(`${a} is even `)
// }
// else{
//     console.log(`${a} odd`)
// }
// var marks=80;
// if(marks>90)
// {
//     console.log("O+ Grade");
// }
//  else if(marks>80)
// {
//     console.log("A Grade");
// }
//  else if(marks>70)
// {
//     console.log("B Grade");
// }
// else{
//     console.log("Fail");
// }
// var a =5;
// const res=(a%2===0)?`${a} is Even`:`${a} is Odd`;
// console.log(res);
// var m=85;
// const Grade=(m>90)?`O grade`:(m>80)?`A grade`:(m>70)?`pass`:`Fail`;
// console.log(Grade);
//for-when to stop
//while-dont end
//do-while-once it need to be iterated for sure
// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }
// var num=1234;
// var c=0;
// while(num>0)
// {
//     c++;
//     num=Math.floor(num/10);
// }
// console.log(c);

// add()
// {
// var a=10;
// var b=20;
// console.log(a+b);c
// }
// // function add(l)
// var add=()=>
// {

//     console.log("Arrow fun()");
// }
//spread operator
// var arr=[1,2,3];
// arr2=[...arr,4,5,6]
// console.log(arr2)
// //Deconstructing 
// var[m1,m2,m3]=[99,98,70];
// console.log(m1,m2,m3);
// var{name,age,dept,contact}
// ={
//     name:"Puttiiiiii",
//     age:23,
//     dept:["DS","cse"],
//     contact:
//     {
//         mobile:9963886510,
//         mail:'vyshnavii@32465.gmail.com'
//     }
// }
// console.log(name,age,dept,contact);
// var arr=[10,20,30,40,50]
// for in
// for(let i in arr)
// {
//     console.log(i,arr[i]);
// }
// var obj={name:"Ram",
//     age:24,
//     isActive:true}
// for(let key in obj)
// {
//     console.log(key,obj[key]);
// }
//for - of
// var arr=[10,20,33,44]
// for(let val of arr)
// {
//     console.log(val);
// }
// //for each
// arr.forEach((val,index)=>{
//     console.log(val,index)
// })
// var arr=[1,2,3,4,5]

//map
// var double=arr.map((val)=>(val*2));
// console.log(double);
// //filter
// var even=arr.filter((val)=>(val%2===0));
// console.log(even);
// //reduce
// var total=arr.reduce((sum,val)=>(sum+val),0);
// console.log(total);
//Hoisting
// console.log(a);
// var a=10;
// add();
// function add()
// {
//     console.log(10+20);
// }
// var a=10; //global scope
// if(true)
// {
//     var b=20; //block scope
// }
// console.log(a);
// console.log(b);
// const i=10;
// if(true)
// {
//   const j=20;
// }
// console.log(i);
// console.log(j);