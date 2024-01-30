//conditional if else
let age=16;
if(age>=18)
{
    console.log("aduolt");
}else if(age>=13) {
    console.log("teenager");
}else{
    console.log("minor");
}

//switch 
let status1;
switch (true) {
    case age=>18:
        status1="adult";
        break;
    case age=>13:
        status1="Teenager";
        break;
    default:
        status1="minor";
}
console.log(status1);

//for loop
let x=['a','b','c','d','e'];
for(let i =0;i<3; i++)
{
    console.log(x[i]);
}
//while loop
let i =0;
while(i<4)
{
    console.log(x[i]);
    i++;
}
//do while loop
let j =0;
do{
    console.log(x[j]);
    j++;
}
while (j<2);

//for in 
for (let i in x)
{
    console.log(x[i]);
}
//for of
for (let i of x)
{
    console.log(i);
}