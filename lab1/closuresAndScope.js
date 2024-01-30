const globalVariable="i am global";

function exampleFunc() {
    const localVariable="i am local";
    console.log(globalVariable);
    console.log(localVariable);
}
exampleFunc();

function createCounter() {
    let count =0;
    return function(){
        count++;
        console.log(count);
    }
}

const counter= createCounter();
counter();
counter();
counter();
