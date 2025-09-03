let current=new Date("2024-08-08");
let day=current.getDate();
console.log(current)//unt
console.log(current.toString());//local
console.log(day);

class Sample{
    constructor(personname){
        console.log(personname)    
        }
    }
    let result=new Sample("js")


    class bank{
        constructor(initialamount=0){
            this._balance=initialamount;
        }
        get balance(){
            return this._balance;
        }
        set balance(amounnt){
            if(amounnt>0){
                this._balance += amounnt;
                console.log(amounnt);
            }
        }
    }
    let b=new bank(10);
    console.log(b)
    b.balance=100;
    console.log(b)