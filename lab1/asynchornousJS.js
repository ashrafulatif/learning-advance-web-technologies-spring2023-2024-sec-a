function fetchData(callback) {
    setTimeout(()=>{
        const data= "hello world";
        callback(data);
    },2000) //delay for 2 sec
}
function process(data) {
    console.log("Data received", data);
}
console.log("Start");
console.log(process);
console.log("End");

//using promises
function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success= true;

            if(success)
            {
                const data = "hello world";
                resolve(data);
            }
            else{
                const error= "failded to fetch data";
                reject(error);
            }
        },2000)
    });
}
console.log("Start");

fetchData().then(data=>{
    console.log("Data received", data);
})
.catch(error=>{
    console.log("Error", error);
})
.finally(()=>{
    console.log("Operation complete!");
});

console.log("End");