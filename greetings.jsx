import React, {useState,useEffect} from 'react'

function Greetings() {
    const [Greeting,setGreetings]=useState("")
    useEffect(()=>{
        const hours=new Date().getHours().toString().padStart(2,'0')
        const minutes=new Date().getMinutes().toString().padStart(2,'0')
        const seconds=new Date().getSeconds().toString().padStart(2,'0')
        if (hours<12){
            setGreetings(`Good Morning ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>=12 && hours<=17){
            setGreetings(`Good Afternoon ${hours}:${minutes}:${seconds}`)

        }
    })
    return (
        <div>
            {Greeting}
        </div>
    )
}

export default Greetings