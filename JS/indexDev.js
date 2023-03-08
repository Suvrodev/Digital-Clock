const Start=document.getElementById('startbtn');
const Stop=document.getElementById('stopbtn');
const Reset=document.getElementById('resetbtn');
const MS=document.getElementById('ms');
const Second=document.getElementById('second');
let SecondValue=parseFloat(Second.innerText);
const Minute=document.getElementById('miniute');
let MinuteValue=parseFloat(Minute.innerText);
const Hour=document.getElementById('hour');
let HourValue=parseFloat(Hour.innerText);

let SetIntervalID;
let count=1;


const ChangeTime=(p1)=>{
    // console.log("Value of p1(2nd) :",p1);
     MS.innerText=count++;
     if(count===200){
        console.log("Second: "+SecondValue+" Data type: "+typeof SecondValue);
        count=0;
        SecondValue = SecondValue+1;
        console.log(`Length of Second Value: ${SecondValue.toString().length}`)
        if(SecondValue.toString().length<2){
            Second.innerHTML=`0${SecondValue}`
        }else{
            Second.innerHTML=SecondValue;
        }
      
     }

     if(SecondValue===15){
        SecondValue=0;
        Second.innerText='00';
        MinuteValue++;
        if(MinuteValue.toString().length<2){
            Minute.innerText=`0${MinuteValue}`;
        }else{
            Minute.innerText=MinuteValue;
        }
      
     }

     if(MinuteValue===5){
        MinuteValue=0;
        Minute.innerText='0';
        HourValue++;
        if(HourValue.toString().length<2){
            Hour.innerText=`0${HourValue}`;
        }else{
            Hour.innerText=HourValue;
        }
      
     }

   // Number.innerText=count++;
    // if(p1===true){
    //     clearInterval(SetIntervalID)
    // }
    // if(p1===false){
    //     Number.innerText=count++;
    // }
}



const Show_Clock=()=>{
  //  console.log("Value of p1: ");
    SetIntervalID=setInterval(ChangeTime,0.1)
    // if(p1===true){
    //     setTimeout(()=>{
    //         console.log("SetInterval ID: "+SetIntervalID);
    //         clearInterval(SetIntervalID);
    //     },1000)
    // }
  //  console.log("Interval ID: ",SetIntervalID)
}

Start.addEventListener('click',()=>{
   

    if(Start.classList.contains('DoStop')){
       // Start.classList.remove('DoStop');
    }else{
        Start.classList.add('DoStop');
        Show_Clock();

        Stop.classList.remove('DoStop');
        Reset.classList.remove('DoStop');
    }

})


Stop.addEventListener('click',()=>{
    console.log("Stop");
    if(Stop.classList.contains('DoStop')){

    }else{
        Stop.classList.add('DoStop');
        //Show_Clock(true);


        Start.classList.remove('DoStop');
        Reset.classList.remove('DoStop');
       // const ResetClock=setInterval(ChangeTime,1000,false)
       clearInterval(SetIntervalID);
    }
})

Reset.addEventListener('click',()=>{
    console.log('Reset');
    
    if(Reset.classList.contains('DoStop')){

    }else{
        Reset.classList.add('DoStop');
        Start.classList.remove('DoStop');
        Stop.classList.remove('DoStop');

    }
    clearInterval(SetIntervalID);
    Number.innerText='0';
    count=0;
    SecondValue=0;
    MinuteValue=0;
    HourValue=0;
    Second.innerText='00';
    Minute.innerText='00';
    Hour.innerText='00';
    MS.innerText='00'

})