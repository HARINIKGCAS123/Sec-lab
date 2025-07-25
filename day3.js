function check(){
    if(true){
        let name="Webdevelopment";
        var iscloudy=true;
        console.log(name);
    }
    console.log(iscloudy);
}
check()

function First(){
    console.log("This is my first function")
}
First()
function Second(callback){
    console.log("This is my second function");
    setInterval()
}
Second(First)           

let count=0;
let Input=()=>{
    count++;
    console.log(count);
    if(count<5){
        Input();
    }
}
Input();